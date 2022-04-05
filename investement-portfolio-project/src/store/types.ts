import { Action } from 'redux';

export const ADD_USER = "ADD_USER";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export enum AppTypes {
  ADD_USER = "ADD_USER"
}

export interface AddUser extends Action {
  type: AppTypes.ADD_USER;
  username: string;
  password: string;
  loggedIn: boolean;
}

export type InvestementPortfolioApp = AddUser