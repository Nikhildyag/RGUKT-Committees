import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Home'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route exact path="/" Component={Homepage} />
    </Routes>
  </BrowserRouter>
)

export default App
