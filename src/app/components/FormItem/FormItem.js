import React, {useEffect, useState} from 'react';
import {FormError, FormInput, FormItemBody, FormPlaceholder} from "./FormItem.style";
import {useValidation} from "../../hooks/useValidation";

const FormItem = props => {
  useEffect(() => {
    setInput(props.control);
    props.setFields(input.name, props.control.valid, props.control.value);
    setPlaceholder(true);
  }, [props.reset]);

  const [placeholder, setPlaceholder] = useState(true);
  const [input, setInput] = useState(props.control);

  const changeHandler = event => {
    const value = event.target.value;
    const valid = useValidation(value, input.validation);
    setInput(prevState => ({...prevState, value, touched: true, valid}));
    props.setFields(input.name, valid, value);
  };
  const focusHandler = () => setPlaceholder(false);
  const blurHandler = () => {
    if (!input.value) setPlaceholder(true);
  };

  return (
    <FormItemBody width={input.width}>
      {!input.valid && input.touched && <FormError>{input.error}</FormError>}
      <FormInput name={input.name} type={input.type} value={input.value} onFocus={focusHandler} onBlur={blurHandler} onChange={event => changeHandler(event)} mask={input.mask} maskChar={null}/>
      <FormPlaceholder plh={placeholder}>{input.label}</FormPlaceholder>
    </FormItemBody>
  );
};

export default FormItem;