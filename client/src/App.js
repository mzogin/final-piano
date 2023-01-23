import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Bio } from './pages/Bio'
import { Lessons } from './pages/Lessons'
import { Awards } from './pages/Awards'
// import { Photos } from './pages/Photos'
import { Photos } from './pages/Photos'
import { Videos } from './pages/Videos'
import { Contact } from './pages/Contact'
// import { Error } from './pages/Error'

// import components
import { Nav } from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='biography' element={<Bio />} />
        <Route path='lessons' element={<Lessons />} />
        <Route path='awards' element={<Awards />} />
        <Route path='photos' element={<Photos />} />
        <Route path='videos' element={<Videos />} />
        <Route path='contact' element={<Contact />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
