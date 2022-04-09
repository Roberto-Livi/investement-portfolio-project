import { AddUser, LoginUser, AppTypes } from "./types";


export const registerUser = (userInfo: any, loggedIn: boolean): AddUser => {
  return({
    type: AppTypes.ADD_USER,
    username: userInfo.username,
    password: userInfo.password,
    loggedIn
  });
}

export const getUser = (userInfo: any, loggedIn: boolean): LoginUser => {
  return({
    type: AppTypes.LOG_IN,
    id: userInfo.id,
    username: userInfo.username,
    password: userInfo.password,
    liquidity: userInfo.liquidity,
    stocks: userInfo.stocks,
    crypto: userInfo.crypto,
    nfts: userInfo.nfts,
    loggedIn
  });
}

