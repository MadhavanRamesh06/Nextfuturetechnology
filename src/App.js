import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import NotFound from './pages/NotFound/notFound';
import SoftwareSecPage from './pages/SectionPage/SoftwareSecPage';
import WebSecPage from './pages/SectionPage/WebSecPage';
import PrivateSecPage from './pages/SectionPage/PrivateSecPage';
import SdkSecPage from './pages/SectionPage/SdkSecPage';
import MobileappSecPage from './pages/SectionPage/MobileappSecPage';
import CloudSecPage from './pages/SectionPage/CloudSecPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />

        <Route path='/software_solution/software_service' exact> <SoftwareSecPage /> </Route>
        <Route path='/software_solution/web_service' exact><WebSecPage/> </Route>
        <Route path='/software_solution/private_service' exact> <PrivateSecPage/> </Route>
        <Route path='/software_solution/sdk&api_service' exact> <SdkSecPage/></Route>
        <Route path='/software_solution/mobile_app_development' exact> <MobileappSecPage/> </Route>
        <Route path='/software_solution/cloud_service' exact> <CloudSecPage/> </Route>
        <Route path='/software_solution/learning_center' exact></Route>

        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
