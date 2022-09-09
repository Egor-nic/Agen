import { GET_ALL_DOCUMENT, SEARCH_DATE, SEARCH_ID, SEARCH_NAME, SORT_DOC_LIST } from "../types/type";

export const allDocumentListReducer = (state = [], action) => {

  const { type, payload } = action

  switch (type) {
    case GET_ALL_DOCUMENT:
      return payload

    case SORT_DOC_LIST:
      return payload

    case SEARCH_ID:

      if (payload === 0) {
        return state
      } else {
        return payload
      }

    case SEARCH_NAME:
      if (payload) {
        return payload
      } else {
        return state
      }

    case SEARCH_DATE:
      if (payload) {
        return payload
      } else {
        return state
      }

    default:
      return state;
  }
}
