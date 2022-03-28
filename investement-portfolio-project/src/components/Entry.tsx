import React from 'react';
import { Formik, Field, Form } from 'formik';

interface MyFormValues {
  username: string,
  password: string
}

const Entry = () => {

  const initialValues: MyFormValues = { username: "", password: ""};

  const onSubmit = (values: object, actions: object) => {
    console.log(typeof values)
    console.log(typeof actions)
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