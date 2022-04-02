import React from 'react';
import { Formik, Field, Form } from 'formik';

interface MyFormValues {
  username: string,
  password: string
}

type Props = {
  saveUser: (loggedIn: boolean, user: IUser | any) => void;
}

export const Entry: React.FC<Props> = ({ saveUser }) => {

  const initialValues: MyFormValues = { username: "", password: ""};

  const onSubmit = (values: any) => {
    console.log(values)
    const user = {
      id: 2,
      username: "rob",
      password: "pass1",
      liquidity: 5000,
      stocks: [],
      crypto: [],
      nfts:[]
    }
    user.password = values.password;
    saveUser(true, user);
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