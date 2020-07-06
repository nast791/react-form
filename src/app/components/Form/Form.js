import React, {useState} from 'react';
import {
  FormBody, FormBtn, FormBtns, FormBtnText,
  FormFields,
  FormTitle,
  FormTitleMain,
  FormTitleNote
} from "./Form.style";
import FormItem from "../FormItem/FormItem";
import {useFormFields} from "../../hooks/useFormFields";

const Form = props => {
  const initialState = props.fields.reduce((acc, it) => {
    acc[it] = {valid: false, value: ''};
    return acc;
  }, {}); // объект вида {name: {valid: false, value: ''}}

  const [fields, setFields] = useState(initialState);
  const [reset, setReset] = useState(false);
  const formValid = Object.keys(fields).filter(it => !fields[it].valid).length; // 0 = форма валидна
  const formEmpty = Object.keys(fields).filter(it => fields[it].value).length; // 0 = форма пуста

  const renderFormItems = () => {
    return Object.keys(fields).map((it, idx) => {
      return (<FormItem key={`${idx}${it}`} control={useFormFields(it)} setFields={(name, valid, value) => setFields(prevState => ({...prevState, [name]: {valid, value}}))} reset={reset}/>)
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    const data = Object.keys(fields).reduce((acc, it) => {
      acc[it] = fields[it].value;
      return acc;
    }, {});
    console.log(data);
  };

  return (
    <FormBody onSubmit={submitHandler}>
      <FormTitle>
        <FormTitleMain>{props.title}</FormTitleMain>
        <FormTitleNote>{props.note}</FormTitleNote>
      </FormTitle>
      <FormFields>
        {renderFormItems()}
      </FormFields>
      <FormBtns>
        <FormBtn type="reset" onClick={() => setReset(!reset)} disabled={!formEmpty}><FormBtnText>Очистить</FormBtnText></FormBtn>
        <FormBtn type="submit" disabled={!!formValid}><FormBtnText>Отправить</FormBtnText></FormBtn>
      </FormBtns>
    </FormBody>
  );
};

export default Form;