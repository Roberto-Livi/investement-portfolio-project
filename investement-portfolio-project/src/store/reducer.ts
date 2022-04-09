import * as actionTypes from './types'
import produce from 'immer';
import { InvestementPortfolioApp } from './types';

const initialState: AppState = {
  id: null,
  username: "",
  password: "",
  liquidity: null,
  stocks: [],
  crypto: [],
  nfts:[],
  loggedIn: false
}

const reducer = (
  state: AppState = initialState,
  action: InvestementPortfolioApp
): AppState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return produce(state, (draft: { username: string; password: string; loggedIn: boolean; }) => { 
        draft.username = action.username;
        draft.password = action.password;
        draft.loggedIn = action.loggedIn;
    });
    case actionTypes.LOG_IN:
      return produce(state, (draft: { id: number, username: string, password: string, liquidity: number, stocks: [], crypto: [], nfts: [], loggedIn: boolean }) => { 
        draft.loggedIn = action.loggedIn;
        draft.username = action.username;
        draft.id = action.id;
        draft.password = action.password;
        draft.liquidity = action.liquidity;
        draft.stocks = action.stocks;
        draft.crypto = action.crypto;
        draft.nfts = action.nfts;
    });
    // case actionTypes.CHANGE_PASSWORD:
    //   return { ...state, password: action.userInfo };
    default:
        return state;
    // case actionTypes.REMOVE_ARTICLE:
    //   const updatedArticles: IArticle[] = state.articles.filter(
    //     article => article.id !== action.article.id
    //   )
    //   return {
    //     ...state,
    //     articles: updatedArticles,
    //   }
  }
}

export default reducer
