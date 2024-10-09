export default class FormValidator {
  constructor(formElement, formConfirm) {
    this._formElement = formElement;
    this._formConfirm = formConfirm;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formConfirm.inputClassError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formConfirm.classError);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity(formElement, inputElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }
}
