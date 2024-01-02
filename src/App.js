import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import NotFound from './pages/NotFound/notFound';
import SoftwareSecPage from './pages/SectionPage/SoftwaresolSec/SoftwareSecPage';
import WebSecPage from './pages/SectionPage/SoftwaresolSec/WebSecPage';
import PrivateSecPage from './pages/SectionPage/SoftwaresolSec/PrivateSecPage';
import SdkSecPage from './pages/SectionPage/SoftwaresolSec/SdkSecPage';
import MobileappSecPage from './pages/SectionPage/SoftwaresolSec/MobileappSecPage';
import CloudSecPage from './pages/SectionPage/SoftwaresolSec/CloudSecPage';
import CSecPage from './pages/SectionPage/Learnsec/CSecPage';
import JavaSecPage from './pages/SectionPage/Learnsec/JavaSecPage';
import PythonSecPage from './pages/SectionPage/Learnsec/PythonSecPage';
import MlSecPage from './pages/SectionPage/Learnsec/MlSecPage';
import AiSecPage from './pages/SectionPage/Learnsec/AiSecPage';
import WhyUsSecPage from './pages/SectionPage/NavSec/WhyUsSec';
import AboutSecPage from './pages/SectionPage/NavSec/AboutSec';
function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about'  exact ><AboutSecPage/></Route>
        <Route path='/whyus'  exact ><WhyUsSecPage/></Route>

        <Route path='/software_solution/software_service' exact> <SoftwareSecPage /> </Route>
        <Route path='/software_solution/web_service' exact><WebSecPage/> </Route>
        <Route path='/software_solution/private_service' exact> <PrivateSecPage/> </Route>
        <Route path='/software_solution/sdk&api_service' exact> <SdkSecPage/></Route>
        <Route path='/software_solution/mobile_app_development' exact> <MobileappSecPage/> </Route>
        <Route path='/software_solution/cloud_service' exact> <CloudSecPage/> </Route>
        <Route path='/software_solution/learning_center/c' exact><CSecPage/></Route>
        <Route path='/software_solution/learning_center/java' exact><JavaSecPage/></Route>
        <Route path='/software_solution/learning_center/python' exact><PythonSecPage/></Route>
        <Route path='/software_solution/learning_center/machine_learning' exact><MlSecPage/></Route>
        <Route path='/software_solution/learning_center/ai' exact><AiSecPage/></Route>


        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
