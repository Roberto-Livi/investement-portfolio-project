import { Action } from 'redux';

export const ADD_USER = "ADD_USER";
export const LOG_IN = "LOG_IN";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const MODIFY_STOCKS = "MODIFY_STOCKS";
export const MODIFY_CRYPTO = "MODIFY_CRYPTO";
export const MODIFY_NFTS = "MODIFY_NFTS";
export const UPDATE_LIQUIDITY = "UPDATE_LIQUIDITY";
export const LOGOUT = "LOGOUT"; 

export enum AppTypes {
  ADD_USER = "ADD_USER",
  LOG_IN = "LOG_IN",
  MODIFY_STOCKS = "MODIFY_STOCKS",
  MODIFY_CRYPTO = "MODIFY_CRYPTO",
  MODIFY_NFTS = "MODIFY_NFTS",
  UPDATE_LIQUIDITY = "UPDATE_LIQUIDITY",
  LOGOUT = "LOGOUT"
}

export enum SecurityMessages {
  USER_NOT_FOUND = "User Not Found"
}

export enum Assets {
  STOCKS = "stocks",
  CRYPTO = "crypto",
  NFTS = "nfts"
}

export interface AddUser extends Action {
  type: AppTypes.ADD_USER;
  username: string;
  password: string;
  loggedIn: boolean;
}

export interface LoginUser extends Action {
  type: AppTypes.LOG_IN;
  id: number;
  username: string;
  password: string;
  liquidity: number;
  stocks: [];
  crypto: [];
  nfts: [];
  loggedIn: boolean;
}

export interface ModifyStocks extends Action {
  type: AppTypes.MODIFY_STOCKS;
  stocks: [];
}

export interface ModifyCrypto extends Action {
  type: AppTypes.MODIFY_CRYPTO;
  crypto: [];
}

export interface ModifyNfts extends Action {
  type: AppTypes.MODIFY_NFTS;
  nfts: [];
}

export interface UpdateLiquidity extends Action {
  type: AppTypes.UPDATE_LIQUIDITY;
  liquidity: number;
}

export interface Logout extends Action {
  type: AppTypes.LOGOUT;
}

export type InvestementPortfolioApp = 
AddUser |
LoginUser |
ModifyStocks |
ModifyCrypto |
ModifyNfts |
UpdateLiquidity |
Logout 