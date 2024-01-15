import React, { useContext, useEffect, useState } from 'react';
import { AddFormContainer, FormContainer, ButtonContainer } from "./add-form.styles";
import Button from '../button/button.component';
import Input from "../input/input.component";
import { collectFormData, defaultFormFields, validationForAddForm, editingRecord } from '../../utils/validation/validation.utils';
import { RecordsContext } from '../../contexts/records.context';
import { AlertContext } from '../../contexts/alert.context';

const AddFormComponent = () => {
  const { addRecordToList, itemToUpdate, editRecordToList } = useContext(RecordsContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { showAlert } = useContext(AlertContext);
  const isEdit = Object.keys(itemToUpdate).length;

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
        title: "Validatasdsadasdsadasdadsasdion Error.",
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

      if (isEdit) {
        editRecordToList(postData)
          .then((response) => {
            if (response.error_code) {
              showAlert({
                isShow: true,
                alertType: 'danger',
                title: "An error occurred during the Editing process.",
                description: response.message,
                buttonContent: 'Error',
              });
              return;
            }
            setFormFields(defaultFormFields);
            showAlert({
              isShow: true,
              alertType: 'success',
              title: "The record was edited successfully.",
              description: "The record was successfully edited on the list. You can check it on the list page.",
              buttonContent: 'Correct',
            });
          })
        return;
      }

      if (!isEdit) {
        addRecordToList(postData)
          .then((response) => {
            if (response.error_code) {
              showAlert({
                isShow: true,
                alertType: 'danger',
                title: "An error occurred during the Addition process.",
                description: "An error occurred during the Addition process.",
                buttonContent: 'Error',
              });
              return;
            }
            setFormFields(defaultFormFields);
            showAlert({
              isShow: true,
              alertType: 'success',
              title: "The record was created successfully.",
              description: "The new record was successfully registered on the list. You can check it on the list page.",
              buttonContent: 'Correct',
            });
          });
      }
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

  useEffect(() => {
    if (isEdit) {
      setFormFields(editingRecord(defaultFormFields, itemToUpdate));
    }
  }, [isEdit, itemToUpdate]);

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
          {Object.keys(itemToUpdate).length
            ? (<Button buttonType="submit" children="Edit" type="submit" />)
            : (<Button buttonType="submit" disabled={isSubmitDisabled} children="Add" type="submit" />)}

        </ButtonContainer>
      </FormContainer>
    </AddFormContainer>
  );
};

export default AddFormComponent;
