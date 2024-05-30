
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import './App.css'
import { useEffect, useState } from 'react'
import useBookContext from './hook/useBookContext'

const App = () => {
  const { getAllBooks } = useBookContext()
  const [currentpage, setCurrentpage] = useState(1)
  useEffect(async () => {
    await getAllBooks();
  }, [])
  const setPageTitle = (page) => {
    return `Reading Book ${page}`;
  }
  useEffect(() => {
    document.title = setPageTitle(currentpage);
  }, [currentpage]);
  return (
    <div className='wrapper'>
      <div className="container">
         <div className="box">
          
        <h1>{setPageTitle(currentpage)}</h1>
        </div>
        <div>
          <BookList setPage={setCurrentpage}/>
        </div>
      </div>
      <BookCreate />
    </div>
  )
}

export default App