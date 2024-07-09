import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Home'
import Acadamic from './components/Commities/Acadamic'
import CampusGreeting from './components/Commities/Campusgreeting'
import CampusAmenties from './components/Commities/CampusAmenties'
import Career from './components/Commities/Career'
import Cultural from './components/Commities/Cultural'
import Education from './components/Commities/Education'
import Environment from './components/Commities/Environment'
import External from './components/Commities/Environment'
import Grievance from './components/Commities/Grievance'
import Health from './components/Commities/Health'
import Hostel from './components/Commities/Hostel'
import Innovation from './components/Commities/Innovation'
import Mess from './components/Commities/Mess'
import Photography from './components/Commities/Photography'
import Placement from './components/Commities/Placement'
import Safety from './components/Commities/Safety'
import Social from './components/Commities/Social'
import Sports from './components/Commities/Sports'
import CentralAuthority from './components/Commities/Acadamic/CentralAuthority'
import FacultyIncarge from './components/Commities/Acadamic/FacultyIncarge'
import StudentCommittee from './components/Commities/Acadamic/StudentCommittee'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Homepage} />
      <Route exact path="/academic" Component={Acadamic} />
      <Route exact path='/campusamenties' Component={CampusAmenties}/>
      <Route exact path='/campusgreeting' Component={CampusGreeting}/>
      <Route exact path='/career' Component={Career}/>
      <Route exact path="/cultural" Component={Cultural}/> 
      <Route exact path='/educational' Component={Education}/>
      <Route exact path="/environment" Component={Environment}/> 
      <Route exact path='/external' Component={External}/>
      <Route exact path='/grievance' Component={Grievance}/> 
      <Route exact path='/health' Component={Health}/>
      <Route exact path='/hostel' Component={Hostel}/>
      <Route exact path='/innovation' Component={Innovation}/>
      <Route exact path='/mess' Component={Mess}/> 
      <Route exact path='/photography' Component={Photography}/>
      <Route exact path='/placement' Component={Placement}/> 
      <Route exact path='/safety' Component={Safety}/> 
      <Route exact path='/social' Component={Social}/> 
      <Route exact path='/sports' Component={Sports}/>
      <Route exact path='/academic/centralaurhority' Component={CentralAuthority}/>
      <Route export path='/academic/facultyincarge' Component={FacultyIncarge}/>
      <Route export path='/academic/studentcommitte' Component={StudentCommittee}/>
    </Routes>
  </BrowserRouter>
)

export default App
