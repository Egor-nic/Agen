import axios from "axios"
import { GET_ALL_DOCUMENT, SEARCH_DATE, SEARCH_ID, SEARCH_NAME, SORT_DOC_LIST } from "../types/type"

export const getAllDocimentList = () => async (dispatch) => {
  const res = await axios('/')
  if (res.status === 200) {
    dispatch({ type: GET_ALL_DOCUMENT, payload: res.data })
  }
}

export const submitSortDocumentList = (arg) => async (dispatch) => {
  const res = await axios.post('/document/sortDoc', arg)
  if (res.status === 200) {
    dispatch({ type: SORT_DOC_LIST, payload: res.data })
  }
}

export const submitsearchId = (id) => async (dispatch) => {
  const res = await axios.post('/document/searchId', { id: id })
  if (res.status === 200) {
    dispatch({ type: SEARCH_ID, payload: res.data })
  }
}

export const submitsearchName = (title) => async (dispatch) => {
  const res = await axios.post('/document/searchName', { title: title })
  if (res.status === 200) {
    dispatch({ type: SEARCH_NAME, payload: res.data })
  }
}

export const submitSearchDate = (dateInterval) => async (dispatch) => {
  const res = await axios.post('/document/searchDate', dateInterval)
  if (res.status === 200) {
    dispatch({ type: SEARCH_DATE, payload: res.data })
  }
}
