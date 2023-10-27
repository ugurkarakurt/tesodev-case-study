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
        if (!checknameSurname(value)) {
          validationErrors[fieldName] = "Name Surname only letters, min 4 – max 60 character.";
        }
        break;
      case "company":
      case "country":
      case "city":
        if (!checkCountryOrCity(value)) {
          validationErrors[fieldName] = `${fieldName} only letters, min 2 – max 40 character.`;
        }
        break;
      case "email":
        if (!checkEmail(value)) {
          validationErrors[fieldName] = "Invalid email address. Please enter a valid email address.";
        }
        break;
      case "website":
        if (!checkUrl(value)) {
          validationErrors[fieldName] = "Invalid URL. Please enter a valid URL.";
        }
        break;
      default:
        break;
    }
  });

  return validationErrors;
};

function checknameSurname(value) {
  const regex = /^[a-zA-Z\s]{4,60}$/;
  return regex.test(value);
}

function checkCountryOrCity(value) {
  const regex = /^[a-zA-Z\s]{2,40}$/;
  return regex.test(value);
}

function checkEmail(value) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
}

function checkUrl(value) {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(value);
}