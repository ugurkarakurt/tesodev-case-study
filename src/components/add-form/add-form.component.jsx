import React, { useContext, useState } from 'react';
import { AddFormContainer, FormContainer, ButtonContainer } from "./add-form.styles";
import Button from '../button/button.component';
import Input from "../input/input.component";
import { collectFormData, validationForAddForm } from '../../utils/validation/validation';
import { post } from '../../utils/request/request.utils';
import { RecordsContext } from '../../contexts/records.context';
import { AlertContext } from '../../contexts/alert.context';
import config from '../../config/config';

const defaultFormFields = {
  nameSurname: {
    value: '',
    error: '',
    displayname: 'Name Username',
  },
  company: {
    value: '',
    error: '',
    displayname: 'Company',
  },
  country: {
    value: '',
    error: '',
    displayname: 'Country',
  },
  city: {
    value: '',
    error: '',
    displayname: 'City',
  },
  email: {
    value: '',
    error: '',
    displayname: 'Email',
  },
  website: {
    value: '',
    error: '',
    displayname: 'Website',
  }
};

const AddFormComponent = () => {
  const { filteredRecords, setFilteredRecords } = useContext(RecordsContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { showAlert } = useContext(AlertContext);
  const apiUrl = config.apiUrl;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validationForAddForm(formFields);

    setFormFields((prevFormFields) => {
      const updatedFormFields = { ...prevFormFields };
      Object.keys(formFields).forEach(fieldName => {
        updatedFormFields[fieldName].error = validationErrors[fieldName] || '';
      });
      return updatedFormFields;
    });

    const hasErrors = Object.values(validationErrors).some(error => error);

    if (hasErrors) {
      showAlert({
        isShow: true,
        alertType: 'danger',
        title: 'Validation Error',
        description: { ...validationErrors },
        buttonContent: 'Error',
      });
    }

    if (!hasErrors) {
      const formattedDate = formatToCustomDate(new Date());
      const postData = {
        ...collectFormData(formFields),
        date: formattedDate,
      };

      post(apiUrl, postData)
        .then((response) => {
          setFilteredRecords([...filteredRecords, response]);
        })
        .then(() => {
          setFormFields(defaultFormFields);
          showAlert({
            isShow: true,
            alertType: 'success',
            title: 'The record was created successfully.',
            description: "The new record was successfully registered on the list. You can check it on the list page.",
            buttonContent: 'Correct',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: {
        value,
        error: '',
        displayname: defaultFormFields[name].displayname,
      },
    }));

    const isFormEmpty = Object.values(formFields).some(field => !field.value.trim());
    setIsSubmitDisabled(isFormEmpty);

    if (!value) {
      setIsSubmitDisabled(true);
    }
  };

  const formatToCustomDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <AddFormContainer>
      <FormContainer onSubmit={handleSubmit}>
        {Object.keys(formFields).map((fieldName) => (
          <Input
            key={fieldName}
            required
            children={`Enter ${fieldName}`}
            label={formFields[fieldName].displayname}
            error={formFields[fieldName].error}
            type="text"
            onChange={handleChange}
            name={fieldName}
            value={formFields[fieldName].value}
          />
        ))}
        <ButtonContainer>
          <Button buttonType="submit" disabled={isSubmitDisabled} children="Add" type="submit" />
        </ButtonContainer>
      </FormContainer>
    </AddFormContainer>
  );
};

export default AddFormComponent;
