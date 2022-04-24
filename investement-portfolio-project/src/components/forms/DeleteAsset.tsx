import React, {useEffect, useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { modifyCryptoEffect, modifyNftsEffect, modifyStocksEffect } from '../../store/effects';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

interface MyFormValues {
  assetId: number | null;
}

const DeleteAsset: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [assetType, setAssetType] = useState("");
  const userId: number | null = useSelector((state: AppState) => state.id);
  const loggedIn: boolean = useSelector((state: AppState) => state.loggedIn);
  const stocks: [] = useSelector((state: AppState) => state.stocks);
  const crypto: [] = useSelector((state: AppState) => state.crypto);
  const nfts: [] = useSelector((state: AppState) => state.nfts);

  const initialValues: MyFormValues = { assetId: null};

  const onSubmit = async (values: any) => {
    newArray(values.assetId);
    navigate("/home");
  }

  const validate = (values: any) => {
    const errors: any = {};

    if(values.assetId === "" || values.assetId === null) {
      errors.empty = "Can't leave field empty";
    }

    if(values.assetId < 0) {
      errors.lessThanZero = "Asset Id can't be less than zero";
    }

    if(assetIdInvalid(values.assetId)) {
      console.log("asset id could not be found")
      errors.assetIdNotFound = "Asset Id Not Found";
    }

    return errors;
  }

  const assetIdInvalid = (assetId: string) => {
    if(_.isEqual(assetType, "stocks")) {
      if(stocks.find((stock) => _.isEqual(assetId, stock['id']))) {
        return false;
      }
    } else if(_.isEqual(assetType, "crypto")) {
      if(crypto.find((token) => _.isEqual(assetId, token['id']))) {
        return false;
      }
    } else if(_.isEqual(assetType, "nfts")) {
      if(nfts.find((nft) => _.isEqual(assetId, nft['id']))) {
        return false;
      }
    }

    return true;
  }

  const newArray = (assetId: string) => {
    if(_.isEqual(assetType, "stocks")) {
      dispatch(modifyStocksEffect(userId, stocks.filter((stock) => stock['id'] !== assetId)));
    } else if(_.isEqual(assetType, "crypto")) {
      dispatch(modifyCryptoEffect(userId, crypto.filter((token) => token['id'] !== assetId)));
    } else if(_.isEqual(assetType, "nfts")) {
      dispatch(modifyNftsEffect(userId, nfts.filter((nft) => nft['id'] !== assetId)));
    }
  }

  useEffect(() => {
    if(!loggedIn) {
      navigate("/");
    }
  })

  return (
    <div>
      <Title>Delete Asset</Title>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}>
        <Form>
            <ErrorMessage name="empty" />
            <ErrorMessage name="lessThanZero" />
            <ErrorMessage name="assetIdNotFound" />
            <FormGroup>
              <RadioGroup>
                <div role="group">
                  <label><Field type="radio" name="asset" value="stocks" onClick={() => setAssetType("stocks")}/>Stock</label>
                  <label><Field type="radio" name="asset" value="crypto" onClick={() => setAssetType("crypto")}/>Crypto</label>
                  <label><Field type="radio" name="asset" value="nfts" onClick={() => setAssetType("nfts")}/>NFT</label>
                </div>
              </RadioGroup>

              <Label htmlFor="assetId">Asset Id</Label>
              <Field name="assetId" type="number" />

              <Button className='button-red' type="submit">Delete</Button>
            </FormGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default DeleteAsset;

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

const RadioGroup = styled.div`
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
`;

const Label = styled.label`
  padding: 10px;
`;

const Button = styled.button`
  margin: 5px;
`;