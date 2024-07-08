import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Homepage from './components/Home'
import Commity1 from './components/Commity1'
// import DesktopCommities from './components/DesktopCommities'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" Component={Homepage} />
      <Route exact path="/commtiy1" Component={Commity1} />
    </Routes>
  </BrowserRouter>
)

export default App
