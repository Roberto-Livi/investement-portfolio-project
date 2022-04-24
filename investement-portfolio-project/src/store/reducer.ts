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
    case actionTypes.MODIFY_STOCKS:
      return produce(state, (draft: { stocks: [] }) => { 
        draft.stocks = action.stocks;
    });
    case actionTypes.MODIFY_CRYPTO:
      return produce(state, (draft: { crypto: [] }) => { 
        draft.crypto = action.crypto;
    });
    case actionTypes.MODIFY_NFTS:
      return produce(state, (draft: { nfts: [] }) => { 
        draft.nfts = action.nfts;
    });
    case actionTypes.UPDATE_LIQUIDITY:
      return produce(state, (draft: { liquidity: number }) => { 
        draft.liquidity = action.liquidity;
    });
    case actionTypes.LOGOUT:
      return initialState;
    default:
        return state;
  }
}

export default reducer
