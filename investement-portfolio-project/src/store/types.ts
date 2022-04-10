import { Action } from 'redux';

export const ADD_USER = "ADD_USER";
export const LOG_IN = "LOG_IN";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const ADD_STOCK = "ADD_STOCK";
export const ADD_CRYPTO = "ADD_CRYPTO";
export const ADD_NFT = "ADD_NFT";
export const LOGOUT = "LOGOUT"; 

export enum AppTypes {
  ADD_USER = "ADD_USER",
  LOG_IN = "LOG_IN",
  ADD_STOCK = "ADD_STOCK",
  ADD_CRYPTO = "ADD_CRYPTO",
  ADD_NFT = "ADD_NFT",
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

export interface AddStock extends Action {
  type: AppTypes.ADD_STOCK;
  stocks: [];
}

export interface AddCrypto extends Action {
  type: AppTypes.ADD_CRYPTO;
  crypto: [];
}

export interface AddNft extends Action {
  type: AppTypes.ADD_NFT;
  nfts: [];
}

export interface Logout extends Action {
  type: AppTypes.LOGOUT;
}

export type InvestementPortfolioApp = 
AddUser |
LoginUser |
AddStock |
AddCrypto |
AddNft |
Logout