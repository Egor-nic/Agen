import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import DocumentList from './componets/documentList';
import Form from './componets/form';
import { getAllDocimentList } from './redux/actions/allDocumentListAction';

function App() {

  const allDocumentList = useSelector(state => state.allDocumentList)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDocimentList())
  }, [])

  return (
    <div className='container'>
      <Form allDocumentList={allDocumentList} />
      <DocumentList allDocumentList={allDocumentList} />
    </div>
  );
}

export default App;
