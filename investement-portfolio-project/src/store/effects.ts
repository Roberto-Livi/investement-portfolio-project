import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { registerUser, getUser } from "./actions";
import { InvestementPortfolioApp } from "./types";
import { createUser } from "../api/ApiCallCenter";


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