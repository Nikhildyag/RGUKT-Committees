import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Home'
import Acadamic from './components/Commities/Acadamic'
import CampusGreening from './components/Commities/CampusGreening'
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
import CampusAmenitiesForm from "./components/forms/CampusAmenitiesForm";
import MessAdvisoryForm from "./components/forms/MessAdvisoryForm ";
import CareerGuidanceForm from "./components/forms/CareerGuidanceForm";
import SportsCommitteeForm from "./components/forms/SportsCommitteeForm";
import CulturalCommitteeForm from "./components/forms/CulturalForm";
import EducationalOpportunitiesForm from "./components/forms/EducationalCommitteeForm";
import ExternalActivitiesForm from "./components/forms/ExternalActivitiesForm";
import SocialServiceForm from "./components/forms/SocialServiceForm";
import PhotographyForm from "./components/forms/PhotographyForm";
import SustainabilityForm from "./components/forms/SustainabilityForm";
import CampusGreeningForm from "./components/forms/CampusGreeningForm";
import CampusSafetyForm from "./components/forms/CampusSafetyForm";
import HealthCommitteeForm from "./components/forms/HealthCommitteeForm";
import PlacementInternshipForm from "./components/forms/PlacementInternshipForm";
import GrievanceRedressalForm from "./components/forms/GrievanceRedressalForm";
import HostelCommitteeForm from "./components/forms/HostelForm";
import InnovationForm from "./components/forms/InnovationForm";
import Form from "./components/forms/AcademicCommitteeForm";
import SportsCentralAuthority from "./components/Commities/Sports/SportsCentralAuthority.js";
import SportsStudentCommittee from "./components/Commities/Acadamic/StudentCommittee.js";
import SportsFacultyIncarge from "./components/Commities/Sports/SportsFacultyIncarge.js";
import SocialCentralAuthority from "./components/Commities/Social/SocialCentralAuthority.js";
import SocialFacultyIncarge from "./components/Commities/Social/SocialFacultyIncharge.js";
import SocialStudentCommittee from "./components/Commities/Social/StudentCommittees.js";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Homepage} />
      <Route exact path="/academic" Component={Acadamic} />
      <Route exact path="/campusamenties" Component={CampusAmenties} />
      <Route exact path="/campusgreeting" Component={CampusGreening} />
      <Route exact path="/career" Component={Career} />
      <Route exact path="/cultural" Component={Cultural} />
      <Route exact path="/educational" Component={Education} />
      <Route exact path="/environment" Component={Environment} />
      <Route exact path="/external" Component={External} />
      <Route exact path="/grievance" Component={Grievance} />
      <Route exact path="/health" Component={Health} />
      <Route exact path="/hostel" Component={Hostel} />
      <Route exact path="/innovation" Component={Innovation} />
      <Route exact path="/mess" Component={Mess} />
      <Route exact path="/photography" Component={Photography} />
      <Route exact path="/placement" Component={Placement} />
      <Route exact path="/safety" Component={Safety} />
      <Route exact path="/social" Component={Social} />
      <Route exact path="/sports" Component={Sports} />
      <Route
        exact
        path="/academic/centralaurhority"
        Component={CentralAuthority}
      />
      <Route
        export
        path="/academic/facultyincarge"
        Component={FacultyIncarge}
      />
      <Route
        export
        path="/academic/studentcommitte"
        Component={StudentCommittee}
      />
      //sports
      <Route
        exact
        path="/sports/centralaurhority"
        Component={SportsCentralAuthority}
      />
      <Route
        export
        path="/sports/facultyincarge"
        Component={SportsFacultyIncarge}
      />
      <Route
        export
        path="/sports/studentcommitte"
        Component={SportsStudentCommittee}
      />
      //social
      <Route
        exact
        path="/social/centralaurhority"
        Component={SocialCentralAuthority}
      />
      <Route
        export
        path="/social/facultyincarge"
        Component={SocialFacultyIncarge}
      />
      <Route
        export
        path="/social/studentcommitte"
        Component={SocialStudentCommittee}
      />
      <Route exact path="/feedbackform" Component={Form} />
      <Route
        exact
        path="/campusamenitiesform"
        Component={CampusAmenitiesForm}
      />
      <Route exact path="/messadvisoryform" Component={MessAdvisoryForm} />
      <Route exact path="/careerguidanceform" Component={CareerGuidanceForm} />
      <Route
        exact
        path="/sportscommitteeform"
        Component={SportsCommitteeForm}
      />
      <Route
        exact
        path="/culturalcommitteeform"
        Component={CulturalCommitteeForm}
      />
      <Route
        exact
        path="/educationalcommitteeform"
        Component={EducationalOpportunitiesForm}
      />
      <Route
        exact
        path="/externalactvitiescommitteeform"
        Component={ExternalActivitiesForm}
      />
      <Route
        exact
        path="/socialservicecommitteeform"
        Component={SocialServiceForm}
      />
      <Route
        exact
        path="/photographycommitteeform"
        Component={PhotographyForm}
      />
      <Route
        exact
        path="/sustainabilitycommitteeform"
        Component={SustainabilityForm}
      />
      <Route
        exact
        path="/campusgreencommitteeform"
        Component={CampusGreeningForm}
      />
      <Route
        exact
        path="/campussafetycommitteeform"
        Component={CampusSafetyForm}
      />
      <Route
        exact
        path="/healthcommitteeform"
        Component={HealthCommitteeForm}
      />
      <Route
        exact
        path="/placement-internshipcommitteeform"
        Component={PlacementInternshipForm}
      />
      <Route
        exact
        path="/grivanceredressalcommitteeform"
        Component={GrievanceRedressalForm}
      />
      <Route
        exact
        path="/hostelcommitteeform"
        Component={HostelCommitteeForm}
      />
      <Route exact path="/innovationcommitteeform" Component={InnovationForm} />
    </Routes>
  </BrowserRouter>
);

export default App;
