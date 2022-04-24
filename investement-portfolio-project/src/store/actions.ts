import { 
  AddUser, 
  LoginUser, 
  AppTypes, 
  ModifyStocks, 
  ModifyCrypto, 
  ModifyNfts, 
  UpdateLiquidity, 
  Logout 
} from "./types";


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

export const modifyStockAction = (stocks: []): ModifyStocks => {
  return({
    type: AppTypes.MODIFY_STOCKS,
    stocks
  })
}

export const modifyCryptoAction = (crypto: []): ModifyCrypto => {
  return({
    type: AppTypes.MODIFY_CRYPTO,
    crypto
  })
}

export const modifyNftAction = (nfts: []): ModifyNfts => {
  return({
    type: AppTypes.MODIFY_NFTS,
    nfts
  })
}

export const updateLiquidity = (liquidity: number): UpdateLiquidity => {
  return({
    type: AppTypes.UPDATE_LIQUIDITY,
    liquidity
  })
}

export const logoutAction = (): Logout => {
  return({
    type: AppTypes.LOGOUT
  })
}

