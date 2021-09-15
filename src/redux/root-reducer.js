import { combineReducers } from 'redux';

import robotReducer from './robots/robots.reducer';
import searchFieldReducer from './searchField/searchfield.reducer';
const rootReducer = combineReducers({
  robots: robotReducer,
  searchField: searchFieldReducer,
});

export default rootReducer;
