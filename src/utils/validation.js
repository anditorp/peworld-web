import { errorRegisterMessages, notAllowedDomains } from "./constants";

export const validateRegister = ({ name, value, allValues = undefined }) => {
  let errorMessage = "";

  if (name === "name") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.name.require;
    } else if (!/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = errorRegisterMessages.name.textOnly;
    }
  }

  if (name === "email") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.email.require;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = errorRegisterMessages.email.invalidFormat;
    } else {
      const domain = value.split("@")[1];
      if (notAllowedDomains.includes(domain)) {
        errorMessage = errorRegisterMessages.email.domain;
      }
    }
  }

  if (name === "phone") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.phone.require;
    } else if (!/^[\d]*$/.test(value)) {
      errorMessage = errorRegisterMessages.phone.numberOnly;
    }
  }

  if (name === "company") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.company.require;
    }
  }

  if (name === "position") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.position.require;
    } else if (!/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = errorRegisterMessages.position.textOnly;
    }
  }

  if (name === "password") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.password.require;
    }
  }

  if (name === "confirmPassword") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.confirmPassword.require;
    } else if (allValues) {
      if (value !== allValues.password) {
        errorMessage = errorRegisterMessages.confirmPassword.mismatch;
      }
    }
  }

  return errorMessage;
};

export const validateLogin = ({ name, value }) => {
  let errorMessage = "";

  if (name === "email") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.email.require;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = errorRegisterMessages.email.invalidFormat;
    }
  }

  if (name === "password") {
    if (value.trim() === "") {
      errorMessage = errorRegisterMessages.password.require;
    }
  }

  return errorMessage;
};
