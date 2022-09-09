import { useState } from "react";
import usePagination from "../hooks/usePagination";

const DocumentList = ({ allDocumentList }) => {

  const [openDocumentinfo, setOpenDocumentinfo] = useState(false)

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: allDocumentList.length,
  });

  const openDocumentinfoHandle = (e, elId) => {
    e.stopPropagation()
    setOpenDocumentinfo(prev => ({ ...prev, [elId]: !prev[elId] }))
  }
  
  return (
    <div className="wrapperDocumentList">
      {allDocumentList && allDocumentList?.slice(firstContentIndex, lastContentIndex)
        .map(el =>
          <div key={el.id} className="wrapper-document-info">
            <div className="document-title" onClick={(e) => openDocumentinfoHandle(e, el.id)}>
              <span>{el.title}</span>
              <span>^</span>
            </div>
            <div className={`document-all--info ${openDocumentinfo[el.id] ? 'visible' : ''}`} >
              <ul>
                <li>id:{el.id} </li>
                <li>name: {el.title}</li>
                <li>date: {new Date(el.date).getDate()}-{new Date(el.date).getMonth()}-{new Date(el.date).getFullYear()}</li>
                <li>comment: {el.desriotion}</li>
              </ul>
            </div>
          </div>
        )}

      <div className="pagination">
        <p className="text">
          {page}/{totalPages}
        </p>
        <button onClick={prevPage} className="page">
          &larr;
        </button>
        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active" : ""}`}
          >
            {el + 1}
          </button>
        ))}
        <button onClick={nextPage} className="page">
          &rarr;
        </button>
      </div>
    </div >
  )
}

export default DocumentList;
