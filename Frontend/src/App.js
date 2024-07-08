import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Homepage from './components/Home'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Header />
      <Route exact path="/" Component={Homepage} />
    </Routes>
  </BrowserRouter>
)

export default App
