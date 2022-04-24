import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateLiquidityEffect } from '../../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

interface MyFormValues {
  liquidity: number | null;
}

const UpdateLiquidity: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId: number | null = useSelector((state: AppState) => state.id);
  const userLiquidity: number | null = useSelector((state: AppState) => state.liquidity);

  const initialValues: MyFormValues = { liquidity: userLiquidity};

  const onSubmit = async (values: any) => {
    dispatch(updateLiquidityEffect(userId, values.liquidity));
    navigate("/home");
  }

  const validate = (values: any) => {
    const errors: any = {};

    if(values.liquidity === "" || values.liquidity === null) {
      errors.empty = "Can't leave field empty";
    }

    if(values.liquidity < 0) {
      errors.lessThanZero = "Liquidity can't be less than zero";
    }

    return errors;
  }

  return (
    <div>
      <Title>Liquidity</Title>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}>
        <Form>
            <ErrorMessage name="empty" />
            <ErrorMessage name="lessThanZero" />
            <FormGroup>

              <Label htmlFor="liquidity">Liquidity</Label>
              <Field name="liquidity" type="number" />

              <button className='button-78' type="submit">Update</button>
            </FormGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateLiquidity;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;

const FormGroup = styled.div`
  position: relative;
  background-color: #8A2BE2;
  border-radius: 5px;
  top: 45px;
  font-weight: 600;
  text-align: center;
  font-size: 25px;
`;

const Label = styled.label`
  padding: 10px;
`;