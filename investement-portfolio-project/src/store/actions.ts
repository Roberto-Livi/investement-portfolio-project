import * as actionTypes from "./types"
import api from '../api/users'

export const addUser = (loggedIn: boolean, userInfo: any) => {
  console.log("addUser called in actions")
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    userInfo,
    loggedIn
  }

  console.log(action.userInfo)
  api.post("/users", action.userInfo);
  return simulateHttpRequest(action);
}

export const changePassword = (id: number, userInfo: any) => {
  console.log("changePassword called in actions")
  const action: UserAction = {
    type: actionTypes.CHANGE_PASSWORD,
    userInfo
  }

  api.put(`/users/${id}`, userInfo);
  return simulateHttpRequest(action);
}
    
export function simulateHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

