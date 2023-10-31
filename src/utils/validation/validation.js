export const collectFormData = (formFields) => {
  const formData = {
    nameSurname: formFields.nameSurname.value,
    company: formFields.company.value,
    country: formFields.country.value,
    city: formFields.city.value,
    email: formFields.email.value,
    website: formFields.website.value,
  };

  return formData;
};

export const validationForAddForm = (formFields) => {
  const validationErrors = {};

  Object.keys(formFields).forEach((fieldName) => {
    const value = formFields[fieldName].value;
    switch (fieldName) {
      case "nameSurname":
        validationErrors[fieldName] = validateNameSurname(value);
        break;
      case "company":
      case "country":
      case "city":
        validationErrors[fieldName] = validateCityOrCountry(value);
        break;
      case "email":
        validationErrors[fieldName] = validateEmail(value);
        break;
      case "website":
        validationErrors[fieldName] = validateUrl(value);
        break;
      default:
        break;
    }
  });

  return validationErrors;
};

function validateNameSurname(value) {
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    return "Use only letters and spaces.";
  }
  if (value.length < 4) {
    return "Enter at least 4 characters.";
  }
  if (value.length > 60) {
    return "Enter up to 60 characters.";
  }
  if (value.split(/\s+/).length < 2) {
    return "Enter at least 2 words.";
  }
  return false;
}

function validateCityOrCountry(value) {
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    return "Use only letters and spaces.";
  }
  if (value.length < 2) {
    return "Enter at least 2 characters.";
  }
  if (value.length > 40) {
    return "Enter up to 40 characters.";
  }
  return false;
}

function validateEmail(value) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return "Invalid Email. Please enter a valid Email.";
  }
  return false;
}

function validateUrl(value) {
  if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
    return "Invalid URL. Please enter a valid URL.";
  }
  return false;

}

export const defaultFormFields = {
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

export const editingRecord = (defaultFormFields, itemToUpdate) => {
  const mergedFields = {
    ...defaultFormFields,
    city: {
      ...defaultFormFields.city,
      value: itemToUpdate.city

    },
    company: {
      ...defaultFormFields.company,
      value: itemToUpdate.company

    },
    country: {
      ...defaultFormFields.country,
      value: itemToUpdate.country

    },
    email: {
      ...defaultFormFields.email,
      value: itemToUpdate.email

    },
    nameSurname: {
      ...defaultFormFields.nameSurname,
      value: itemToUpdate.nameSurname

    },
    website: {
      ...defaultFormFields.website,
      value: itemToUpdate.website
    }
  }
  return mergedFields;
}