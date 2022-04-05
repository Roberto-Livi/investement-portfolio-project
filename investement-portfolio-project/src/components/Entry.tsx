import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registerNewUser } from '../store/effects';
import { useNavigate } from 'react-router-dom';

interface MyFormValues {
  username: string,
  password: string
}

type Props = {
  // saveUser: (loggedIn: boolean, user: object | any) => void;
}

const Entry: React.FC<Props> = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: MyFormValues = { username: "", password: ""};

  const onSubmit = (values: any) => {
    console.log(values)
    const user = {
      username: values.username,
      password: values.password,
      liquidity: 0,
      stocks: [],
      crypto: [],
      nfts:[]
    }
    dispatch(registerNewUser(user, true));
    navigate("/home");
  }

  return (
    <div>
      <h1>Entry</h1>
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
