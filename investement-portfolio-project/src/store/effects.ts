import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { registerUser } from "./actions";
import { InvestementPortfolioApp } from "./types";
import api from '../api/users';

export const registerNewUser: ActionCreator<ThunkAction<Promise<AnyAction>, AppState, null, InvestementPortfolioApp>> = (userInfo: object, loggedIn: boolean) => {
    return async(dispatch: Dispatch) => {
        api.post("/users", userInfo)
        return dispatch(registerUser(userInfo, loggedIn));
    }
}