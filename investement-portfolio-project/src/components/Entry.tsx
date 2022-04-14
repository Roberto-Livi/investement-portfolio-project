import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser, registerNewUser } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import { retrieveExistingUser } from '../api/ApiCallCenter';
import _ from 'lodash';
import { SecurityMessages } from '../store/types';

interface MyFormValues {
  username: string,
  password: string
}

const Entry: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: MyFormValues = { username: "", password: ""};

  const [formStatus, setFormStatus] = useState("login");

  const onSubmit = async (values: any) => {
    const user = {
      username: values.username,
      password: values.password,
      liquidity: 0,
      stocks: [],
      crypto: [],
      nfts:[]
    }

    if(_.isEqual(formStatus, "login")) {
      login(values.username, values.password);
    } else if(_.isEqual(formStatus, "register")) {
      register(user);
    }
  }

  const login = async (username: string, password: string) => {
    let userRetrieval = await retrieveExistingUser(username, password);
    if(_.isEqual(userRetrieval, SecurityMessages.USER_NOT_FOUND)) {
      console.log("Could not find user")
    } else {
      dispatch(loginUser(userRetrieval, true));
      navigate("/home");
    }
  }
  
  const register = (user: object) => {
    dispatch(registerNewUser(user, true));
  }

  const changeFormStatus = (formStatus: string) => {
    setFormStatus(formStatus);
  }

  return (
    <div>
      <h1>Entry</h1>
      <button type="button" onClick={() => changeFormStatus("login")}>Login</button>
      <button type="button" onClick={() => changeFormStatus("register")}>Register</button>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
          <Field name="username" />
          <Field name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Entry;
