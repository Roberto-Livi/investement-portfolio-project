import { Action } from 'redux';

export const ADD_USER = "ADD_USER";
export const LOG_IN = "LOG_IN";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export enum AppTypes {
  ADD_USER = "ADD_USER",
  LOG_IN = "LOG_IN"
}

export enum SecurityMessages {
  USER_NOT_FOUND = "User Not Found"
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

export type InvestementPortfolioApp = 
AddUser |
LoginUser