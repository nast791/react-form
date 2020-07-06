import is from 'is_js';

export const useValidation = (value, validation) => {
  if (!validation) return true;
  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.date) {
    const day = +value.split('.')[0];
    const month = +value.split('.')[1];
    const year = +value.split('.')[2];
    let dayMax;
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      dayMax = 30
    } else if (month === 2 && !(year%4)) {
      dayMax = 29;
    } else if (month === 2 && year%4) {
      dayMax = 28;
    } else {
      dayMax = 31;
    }

    isValid = (day > 0 && day <= dayMax) && (month > 0 && month <= 12) && (year > 1800 && year <= (new Date).getFullYear()) && isValid;
  }

  return isValid;
};