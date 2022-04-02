interface IUser {
  id: int
  username: string
  password: string
  liquidity: int
  stocks: []
  crypto: []
  nfts:[]
}

type AppState = {
  userInfo: IUser;
  loggedIn: boolean;
}

type UserAction = {
  type: string
  userInfo: IUser
}

type DispatchType = (args: UserAction) => UserAction
