import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Homepage} />
    </Routes>
  </BrowserRouter>
)

export default App
