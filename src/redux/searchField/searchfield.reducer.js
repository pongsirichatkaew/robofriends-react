import { CHANGE_SEARCH_FIELD } from './searchfield.type';
const initialState = {
  searchField: '',
};

const searchFieldReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    default:
      return state;
  }
};

export default searchFieldReducer;
