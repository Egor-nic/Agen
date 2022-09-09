import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDocimentList, submitSearchDate, submitsearchId, submitsearchName, submitSortDocumentList } from "../redux/actions/allDocumentListAction";

const Form = ({ allDocumentList }) => {

  const dispatch = useDispatch()

  const [allDocumentListKeys, setAllDocumentListKeys] = useState([])

  const [sortDocumentList, setSortDocumentList] = useState({ title: '', type: '' })

  const [searchDocumentDate, setSearchDocumentDate] = useState({ start: '', end: '' })

  const [errSearchId, setErrSearchId] = useState(false)

  useEffect(() => {
    if (allDocumentList.length !== 0) {
      setAllDocumentListKeys(Object.keys(allDocumentList[0]))
    }
  }, [allDocumentList])

  const sortDocumentListHandle = (e) => {
    setSortDocumentList(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const searchIdHandle = (id) => {
    const reg = /[0-9]/
    if (id.match(reg)) {
      dispatch(submitsearchId(Number(id)))
      setErrSearchId(false)
    } else {
      setErrSearchId(true)
      dispatch(getAllDocimentList())
    }
  }

  const searchNameHandle = (title) => {
    if (title) {
      dispatch(submitsearchName(title))
    } else {
      dispatch(getAllDocimentList())
    }
  }

  const searchDocumentDateHandle = (e) => {
    setSearchDocumentDate(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (sortDocumentList.title && sortDocumentList.type) {
      dispatch((submitSortDocumentList(sortDocumentList)))
    }
  }, [sortDocumentList])

  useEffect(() => {
    if (searchDocumentDate.start && searchDocumentDate.end) {
      dispatch(submitSearchDate(searchDocumentDate))
    } else {
      dispatch(getAllDocimentList())
    }
  }, [searchDocumentDate])

  return (

    <div className="wrapper">
      <div className="inputWrapper">
        <label className="" htmlFor="documentId">document id</label>
        <input type="text" name="documentId" id="documentId" onChange={(e) => searchIdHandle(e.target.value)} />
        <label className={errSearchId ? 'inputErr' : 'noErr'} htmlFor="documentId">Только цифры!</label>
      </div>
      <div className="inputWrapperCreateDocument">
        <div className="createinputWrapper">
          <label className="" htmlFor="createDocumentDate">create document</label>
          <input type="text" name="start" id="createDocumentDate" placeholder="YYYY MM DD" onChange={searchDocumentDateHandle} />
        </div>
        <div className="createinputWrapper">
          <label className="hidenLable" htmlFor="createDocumentEnd">create</label>
          <input type="text" name="end" id="createDocumentEnd" placeholder="YYYY MM DD" onChange={searchDocumentDateHandle} />
        </div>
      </div>
      <div className="inputWrapper">
        <label className="" htmlFor="documentName">document name</label>
        <input type="text" name="documentName" id="documentName" onChange={(e) => searchNameHandle(e.target.value)} />
      </div>
      <div className="inputWrapperCreateDocument">
        <div className="createinputWrapper">
          <span>Сортировка</span>
          <select name="title" id="" onChange={sortDocumentListHandle}>
            <option>Выбрать параметр</option>
            {allDocumentListKeys && allDocumentListKeys.map((el, i) =>
              <option key={i} value={el}>{el}</option>
            )}
          </select>
        </div>
        <div className="createinputWrapper">
          <span className="hidenLable">Сортировка</span>
          <select name="type" id="" onChange={sortDocumentListHandle}>
            <option>Выбрать параметр</option>
            <option value="ascending">По возрвствнию </option>
            <option value="decrease">По убыванию</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Form;
