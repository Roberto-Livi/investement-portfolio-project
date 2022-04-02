import * as actionTypes from "./types"
import api from '../api/users'

export const addUser = (userInfo: any) => {
  console.log("addUser called in actions")
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    userInfo
  }

  console.log(action.userInfo)
  api.post("/users", action.userInfo);
  return simulateHttpRequest(action);
}
    
export function simulateHttpRequest(action: UserAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

