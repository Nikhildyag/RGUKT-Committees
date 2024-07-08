import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Homepage from './components/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Header />
      <Route exact path="/" Component={Homepage} />
    </Routes>
  </BrowserRouter>
)

export default App
