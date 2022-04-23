import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCryptoEffect, addNftEffect, addStockEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Assets } from '../store/types';
import styled from 'styled-components';

interface MyFormValues {
  id: number | null;
  assetType: string;
  name: string;
  amountSpent: number | null;
  currentWorth: number | null;
}

const ModifyAsset: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId: number | null = useSelector((state: AppState) => state.id);
  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);

  const initialValues: MyFormValues = { id: null, assetType: "", name: "", amountSpent: null, currentWorth: null };

  const onSubmit = async (values: any) => {
    const modifiedAsset = {
        id: values.id,
        name: values.name,
        amountSpent: values.amountSpent,
        currentWorth: values.currentWorth
    }

    if(_.isEqual(values.assetType, Assets.STOCKS)) {
      assetSearch(stocks, modifiedAsset, values.assetType);
    } else if(_.isEqual(values.assetType, Assets.CRYPTO)) {
      assetSearch(crypto, modifiedAsset, values.assetType);
    } else if(_.isEqual(values.assetType, Assets.NFTS)) {
      assetSearch(nfts, modifiedAsset, values.assetType);
    } else {
      console.log("Asset Type is Required");
    }

  }

  const validate = (values: any) => {
    const errors: any = {};
    if(_.isEmpty(values.assetType) || _.isEmpty(values.name) || _.isEqual(values.amountSpent, "" || null) ||  _.isEqual(values.id, "" || null) ||  _.isEqual(values.currentWorth, "" || null)) {
      console.log("empty")
      errors.empty = "Can't Leave Field(s) Empty";
    }

    if(values.amountSpent < 0 || values.currentWorth < 0 || values.id < 0) {
      console.log("less than zero")
      errors.lessThanZero = "Can't be less than zero";
    }

    return errors;
  }

  const assetSearch = (assetCollection: [], modifiedAsset: any, assetType: string) => {
    let updatedAssets: any[] = [...assetCollection];
    const assetIndex: number = assetCollection.findIndex(e => _.isEqual(e['id'], modifiedAsset.id));
    if(assetIndex >= 0 ) {
      updatedAssets[assetIndex] = modifiedAsset;
      modifyAsset(updatedAssets, assetType);
    } else {
      console.log("Unable to find asset")
    }
  }

  const modifyAsset = (assetCollection: any[], assetType: string) => {
    if(_.isEqual(assetType, Assets.STOCKS)) {
      dispatch(addStockEffect(userId, assetCollection));
    } else if(_.isEqual(assetType, Assets.CRYPTO)) {
      dispatch(addCryptoEffect(userId, assetCollection));
    } else if(_.isEqual(assetType, Assets.NFTS)) {
      dispatch(addNftEffect(userId, assetCollection));
    }
    navigate("/home");
  }

  return (
    <div>
      <Title>Modify Asset</Title>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}>
        <Form>
            <ErrorMessage name="emtpy" />
            <ErrorMessage name="lessThanZero" />
            <RadioGroup>
              <div role="group">
                <label><Field type="radio" name="assetType" value="stocks"/>Stock</label>
                <label><Field type="radio" name="assetType" value="crypto"/>Crypto</label>
                <label><Field type="radio" name="assetType" value="nfts"/>NFT</label>
              </div>
            </RadioGroup>

            <FormGroup>
            <Label htmlFor="id">Asset ID</Label>
            <Field type="number" name="id" />

            <Label htmlFor="name">Name</Label>
            <Field name="name" />

            <Label htmlFor="amountSpent">Amount Spent</Label>
            <Field name="amountSpent" type="number" />

            <Label htmlFor="currentWorth">Current Worth</Label>
            <Field name="currentWorth" type="number" />

            <button className='button-78' type="submit">Update Asset</button>
            </FormGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default ModifyAsset;

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
  top: 45px;
  background-color: #8A2BE2;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  font-size: 25px;
`;

const Label = styled.label`
  padding: 10px;
`;