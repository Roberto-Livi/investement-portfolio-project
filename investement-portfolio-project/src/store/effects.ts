import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUser, modifyStockAction, modifyCryptoAction, modifyNftAction, updateLiquidity, logoutAction } from "./actions";
import { InvestementPortfolioApp, Assets } from "./types";
import { addOrModifyAssets, apiUpdateUserLiquidity } from "../api/ApiCallCenter";


export const loginUser: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (userInfo: object, loggedIn: boolean) => {
    return async(dispatch: Dispatch) => {
        return dispatch(getUser(userInfo, loggedIn));
    }
}

export const modifyStocksEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, stocks: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, stocks, Assets.STOCKS);
        return dispatch(modifyStockAction(stocks));
    }
}

export const modifyCryptoEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, crypto: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, crypto, Assets.CRYPTO);
        return dispatch(modifyCryptoAction(crypto));
    }
}

export const modifyNftsEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, nfts: []) => {
    return async(dispatch: Dispatch) => {
        addOrModifyAssets(id, nfts, Assets.NFTS);
        return dispatch(modifyNftAction(nfts));
    }
}

export const updateLiquidityEffect: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (id: number, liquidity: number) => {
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