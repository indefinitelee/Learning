// @flow

import { SET_SEARCH_TERM } from './actions';

// eslint-disable-next-line import/prefer-default-export
export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
