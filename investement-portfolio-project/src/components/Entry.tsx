import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser, registerNewUser } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import { retrieveExistingUser } from '../api/ApiCallCenter';
import _ from 'lodash';
import { SecurityMessages } from '../store/types';
import styled from "styled-components";

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
    <Container>
      <Title>Investement Portfolio Project</Title>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
          <FormContainer>
            <label>Username</label>
            <Field style ={{width: "200px", height: "30px", fontSize: "21px"}} name="username" />
            <label>Password</label>
            <Field style ={{width: "200px", height: "30px", fontSize: "21px"}} className="form-fields" type="password" name="password" />
          </FormContainer>
          <ButtonContainer>
              <button className="button-78" type="submit" onClick={() => changeFormStatus("login")}>Login</button>
              <button className="button-78" type="submit" onClick={() => changeFormStatus("register")}>Register</button>
          </ButtonContainer>
        </Form>
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

const ButtonContainer = styled.div`
  margin: auto;
  position: relative;
  width: 15%;
  padding: 10px;
  top: 15vh;
`;

const FormContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 12vh;
`;

const Container = styled.div`
  border: black;
`
