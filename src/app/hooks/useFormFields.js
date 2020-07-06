export const useFormFields = (field) => {
  const name = {
    value: '',
    name: 'name',
    type: 'text',
    label: 'Имя',
    width: '30%',
    error: 'Заполните поле',
    valid: false,
    touched: false,
    validation: {
      required: true
    }
  };

  const email = {
    value: '',
    name: 'email',
    type: 'email',
    label: 'Email',
    width: '30%',
    error: 'Неверный формат',
    valid: false,
    touched: false,
    validation: {
      required: true,
      email: true
    }
  };

  const date = {
    value: '',
    name: 'date',
    type: 'text',
    mask: '99.99.9999',
    label: 'Дата рождения',
    width: '30%',
    error: 'Неверный формат',
    valid: false,
    touched: false,
    validation: {
      required: true,
      date: true
    }
  };

  const message = {
    value: '',
    name: 'message',
    type: 'text',
    label: 'Сообщение',
    width: '100%',
    error: 'Заполните поле',
    valid: false,
    touched: false,
    validation: {
      required: true
    }
  };

  const fields = {name, email, date, message};
  return fields[field];
};