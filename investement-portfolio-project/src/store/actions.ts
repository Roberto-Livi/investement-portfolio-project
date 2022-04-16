import { AddUser, LoginUser, AppTypes, AddStock, AddCrypto, AddNft, 
  // ModifyStocks, ModifyCrypto, ModifyNfts, 
  Logout } from "./types";


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

export const addStockAction = (stocks: []): AddStock => {
  return({
    type: AppTypes.ADD_STOCK,
    stocks
  })
}

export const addCryptoAction = (crypto: []): AddCrypto => {
  return({
    type: AppTypes.ADD_CRYPTO,
    crypto
  })
}

export const addNftAction = (nfts: []): AddNft => {
  return({
    type: AppTypes.ADD_NFT,
    nfts
  })
}

export const logoutAction = (): Logout => {
  return({
    type: AppTypes.LOGOUT
  })
}

