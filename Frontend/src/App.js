import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Homepage from './components/Home'
import Acadamic from './components/Acadamic'
// import DesktopCommities from './components/DesktopCommities'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" Component={Homepage} />
      <Route exact path="/academic" Component={Acadamic} />
    </Routes>
  </BrowserRouter>
)

export default App
