import { Action } from "redux";

export enum ActionTypes {
    LOGGING_IN = "loggingIn"
}

export interface LoggingIn extends Action {
    type: ActionTypes.LOGGING_IN;
    username: string;
}