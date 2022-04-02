import * as actionTypes from './types'

const initialState: AppState = {
  userInfo: {
    id: null,
    username: "",
    password: "",
    liquidity: null,
    stocks: [],
    crypto: [],
    nfts:[]
  },
  loggedIn: false
}

const reducer = (
  state: AppState = initialState,
  action: any
): AppState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const newUser: IUser = action.userInfo;
      return { ...state, userInfo: newUser };
    // case actionTypes.REMOVE_ARTICLE:
    //   const updatedArticles: IArticle[] = state.articles.filter(
    //     article => article.id !== action.article.id
    //   )
    //   return {
    //     ...state,
    //     articles: updatedArticles,
    //   }
  }
  return state;
}

export default reducer
