import { Routes, Route, Link } from 'react-router-dom'


import Home from './pages/Home.jsx'
import Introduction from './pages/Introduction.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'

import './App.scss'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
