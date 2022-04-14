import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCryptoEffect, addNftEffect, addStockEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Assets } from '../store/types';

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
        currentWorth: values.amountSpent
    }

    const stockFound = stocks.findIndex(e => _.isEqual(e, modifiedAsset));
    console.log(stockFound)
  }

  return (
    <div>
      <h1>Modify Asset</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
            <label htmlFor="id">Asset ID</label>
            <Field type="number" name="id" />

            <div id="my-radio-group">
              <div role="group">
                <label><Field type="radio" name="assetType" value="stocks"/>Stock</label>
                <label><Field type="radio" name="assetType" value="crypto"/>Crypto</label>
                <label><Field type="radio" name="assetType" value="nfts"/>NFT</label>
              </div>
            </div>

            <label htmlFor="name">Name</label>
            <Field name="name" />

            <label htmlFor="amountSpent">Amount Spent</label>
            <Field name="amountSpent" type="number" />

            <label htmlFor="currentWorth">Current Worth</label>
            <Field name="currentWorth" type="number" />

            <button type="submit">Update Asset</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ModifyAsset;