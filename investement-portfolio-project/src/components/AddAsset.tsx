import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCryptoEffect, addNftEffect, addStockEffect } from '../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Assets } from '../store/types';

interface MyFormValues {
  asset: string,
  name: string,
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
        internalId: Math.floor(Math.random() * 2000),
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
      <h1>Add Asset</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
            <div id="my-radio-group">Picked</div>
                <div role="group">
                <label><Field type="radio" name="asset" value="stocks"/>Stock</label>
                <label><Field type="radio" name="asset" value="crypto"/>Crypto</label>
                <label><Field type="radio" name="asset" value="nfts"/>NFT</label>
            </div>

            <label htmlFor="name">Name</label>
            <Field name="name" />

            <label htmlFor="amountSpent">Amount Spent</label>
            <Field name="amountSpent" type="number" />

            <button type="submit">Add Asset</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddAsset;