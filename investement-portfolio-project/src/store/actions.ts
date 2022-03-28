import { ActionTypes } from "./types";

export const loggingIn = (username: string) => ({
    type: ActionTypes.LOGGING_IN,
    username
});
    

