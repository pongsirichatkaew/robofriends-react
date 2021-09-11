import { CHANGE_SEARCH_FIELD } from './searchfield.type';
export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
