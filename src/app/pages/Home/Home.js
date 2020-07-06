import React from 'react';
import Form from "../../components/Form/Form";
import {HomeBody} from "./Home.style";

const Home = () => {
  return (
    <HomeBody>
      <Form fields={['name', 'email', 'date', 'message']} title="Отправить сообщение" note="Анонимные собщения рассматриваются"/>
    </HomeBody>
  );
};

export default Home;