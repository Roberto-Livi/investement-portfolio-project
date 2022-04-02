interface IUser {
  id: number | null
  username: string
  password: string
  liquidity: number | null
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
  userInfo?: any,
  loggedIn?: boolean
}

type DispatchType = (args: UserAction) => UserAction
