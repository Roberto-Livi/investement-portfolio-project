import { AddUser, AppTypes } from "./types";


export const registerUser = (userInfo: any, loggedIn: boolean): AddUser => {
  return({
    type: AppTypes.ADD_USER,
    username: userInfo.username,
    password: userInfo.password,
    loggedIn
  });
}

