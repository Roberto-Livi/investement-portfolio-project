import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCryptoEffect, addNftEffect, addStockEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Assets } from '../store/types';
import styled from 'styled-components';

interface MyFormValues {
  asset: string;
  name: string;
  amountSpent: number | null;
}

const AddAsset: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId: number | null = useSelector((state: AppState) => state.id);
  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);

  const initialValues: MyFormValues = { asset: "", name: "", amountSpent: null };

  const onSubmit = async (values: any) => {
    let usersAssets: any = [];
    const asset = {
        id: Math.floor(Math.random() * 2000),
        name: values.name,
        amountSpent: values.amountSpent,
        currentWorth: values.amountSpent
    }

    if(_.isEqual(values.asset, Assets.STOCKS)) {
        usersAssets = [...stocks, asset];
    } else if(_.isEqual(values.asset, Assets.CRYPTO)) {
        usersAssets = [...crypto, asset];
    } else if(_.isEqual(values.asset, Assets.NFTS)) {
        usersAssets = [...nfts, asset];
    }
    updateAssets(values.asset, usersAssets);
  }

  const updateAssets = (asset: string, usersAssets: []) => {
      console.log(usersAssets)
    if(_.isEqual(asset, Assets.STOCKS)) {
        dispatch(addStockEffect(userId, usersAssets));
    } else if(_.isEqual(asset, Assets.CRYPTO)) {
        dispatch(addCryptoEffect(userId, usersAssets));
    } else if(_.isEqual(asset, Assets.NFTS)) {
        dispatch(addNftEffect(userId, usersAssets));
    }
    navigate("/home");
  }

  return (
    <div>
      <Title>Add Asset</Title>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
            <RadioGroup>
              <div role="group">
                <label><Field type="radio" name="asset" value="stocks"/>Stock</label>
                <label><Field type="radio" name="asset" value="crypto"/>Crypto</label>
                <label><Field type="radio" name="asset" value="nfts"/>NFT</label>
              </div>
            </RadioGroup>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Field name="name" />

              <Label htmlFor="amountSpent">Amount Spent</Label>
              <Field name="amountSpent" type="number" />

              <button className='button-78' type="submit">Add Asset</button>
            </FormGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default AddAsset;

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.2em;
  text-align: center;
  font-size: 60px;
`;

const RadioGroup = styled.div`
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
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