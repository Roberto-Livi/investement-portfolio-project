import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import { retrieveExistingUser } from '../api/ApiCallCenter';
import _ from 'lodash';
import { SecurityMessages } from '../store/types';
import styled from "styled-components";
import * as Yup from "yup";
import { createUser } from "../api/ApiCallCenter";

interface MyFormValues {
  username: string,
  password: string
}

const SignupSchema = Yup.object().shape({
   username: Yup.string()
     .min(3, 'Minimum Characters (3)')
     .max(16, 'Maximum Characters (15)')
     .required('Required'),
   password: Yup.string()
     .min(3, 'Minimum Characters (3)')
     .required('Required'),
 });

const Entry: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: MyFormValues = { username: "", password: ""};

  const [formStatus, setFormStatus] = useState("login");
  const [registered, setRegistered] = useState(false);
  const [registeredMessage] = useState("You have successfully registered");

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
    createUser(user);
    setRegistered(true);
  }

  const changeFormStatus = (formStatus: string) => {
    setFormStatus(formStatus);
  }

  useEffect(() => {
    setTimeout(() => {
      setRegistered(false);
    }, 5000)
  }, [registered])

  return (
    <Container>
      <Title>Investement Portfolio Project</Title>
      { registered && <RegisteredMessage>{registeredMessage}</RegisteredMessage> }
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}>
      { !registered && 
        <Form>
          <FormContainer>
            <label>Username</label>
            <Field style ={{width: "200px", height: "30px", fontSize: "21px" }} name="username" />
            <ErrorMessage name="username" />
            <label>Password</label>
            <Field style ={{width: "200px", height: "30px", fontSize: "21px" }} className="form-fields" type="password" name="password" />
            <ErrorMessage name="password" />
          </FormContainer>
          <ButtonContainer>
              <button className="button-78" type="submit" onClick={() => changeFormStatus("login")}>Login</button>
              <button className="button-78" type="submit" onClick={() => changeFormStatus("register")}>Register</button>
          </ButtonContainer>
        </Form>
      }
      </Formik>
    </Container>
  );
}

export default Entry;

const Title = styled.h1`
  font-weight: 600;
  color: #8A2BE2;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;

const RegisteredMessage = styled.h1`
  font-weight: 600;
  color: #4B0082;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;

const ButtonContainer = styled.div`
  margin: auto;
  position: relative;
  width: 15%;
  padding: 10px;
  top: 11vh;
`;

const FormContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 8vh;
`;

const Container = styled.div`
  border: black;
`
