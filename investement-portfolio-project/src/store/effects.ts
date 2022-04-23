import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUser, addStockAction, addCryptoAction, addNftAction, updateLiquidity, logoutAction } from "./actions";
import { InvestementPortfolioApp, Assets } from "./types";
import { addOrModifyAssets, apiUpdateUserLiquidity } from "../api/ApiCallCenter";


export const loginUser: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (userInfo: object, loggedIn: boolean) => {
    return async(dispatch: Dispatch) => {
        return dispatch(getUser(userInfo, loggedIn));
    }
}

export const addStockEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, stocks: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, stocks, Assets.STOCKS);
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

export const updateUserLiquidity: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, liquidity: number) => {
    return async(dispatch: Dispatch) => {
        apiUpdateUserLiquidity(id, liquidity);
        return dispatch(updateLiquidity(liquidity));
    }
}

export const logoutEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = () => {
    return async(dispatch: Dispatch) => {
        return dispatch(logoutAction());
    }
}