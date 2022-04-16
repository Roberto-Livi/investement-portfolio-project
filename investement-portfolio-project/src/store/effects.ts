import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { registerUser, getUser, addStockAction, addCryptoAction, addNftAction, logoutAction } from "./actions";
import { InvestementPortfolioApp, Assets } from "./types";
import { createUser, addOrModifyAssets } from "../api/ApiCallCenter";


export const registerNewUser: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (userInfo: object, loggedIn: boolean) => {
    return async(dispatch: Dispatch) => {
        createUser(userInfo);
        return dispatch(registerUser(userInfo, loggedIn));
    }
}

export const loginUser: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (userInfo: object, loggedIn: boolean) => {
    return async(dispatch: Dispatch) => {
        return dispatch(getUser(userInfo, loggedIn));
    }
}

export const addStockEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, stocks: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, stocks, Assets.STOCKS);
        console.log("update")
        return dispatch(addStockAction(stocks));
    }
}

export const addCryptoEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, crypto: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, crypto, Assets.CRYPTO);
        return dispatch(addCryptoAction(crypto));
    }
}

export const addNftEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, nfts: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, nfts, Assets.NFTS);
        return dispatch(addNftAction(nfts));
    }
}

export const logoutEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = () => {
    return async(dispatch: Dispatch) => {
        return dispatch(logoutAction());
    }
}