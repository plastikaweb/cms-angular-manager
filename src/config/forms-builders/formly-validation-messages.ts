function minlengthValidationMessage(err, field) {
  return `Mínimo ${field.templateOptions.minLength} caracteres`;
}

function maxlengthValidationMessage(err, field) {
  return `Máximo ${field.templateOptions.maxLength} caracteres`;
}

function minValidationMessage(err, field) {
  return `Valor mínimo ${field.templateOptions.min}`;
}

function maxValidationMessage(err, field) {
  return `Valor máximo ${field.templateOptions.max}`;
}

export default [
  { name: 'required', message: 'Campo obligatorio' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
];
