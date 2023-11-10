
import './App.css'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Customize from './Components/Customize'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Customize />} path='/' />
        </Routes>
      </Router>
    </>
  )
}

export default App
