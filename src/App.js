import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SectionPage from './pages/page';
import serviceData from './ServiceData/serviceData';
import NotFound from './pages/NotFound/notFound';
import Servicetype from './components/Servicetype';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* ADD SERVICE PATHS HERE */}
        <Route path='/software_solution/software_service/cctv' exact> <SectionPage data={serviceData.cctv}/> </Route>
        <Route path='/software_solution/software_service' exact> <Servicetype data={serviceData.software_service}/> </Route>
        <Route path='/software_solution/web_service' exact> <Servicetype data={serviceData.web_service}/> </Route>
        <Route path='/software_solution/private_service' exact> <Servicetype data={serviceData.private_service}/> </Route>
        <Route path='/software_solution/sdk&api_service' exact> <Servicetype data={serviceData.sdk_api_service}/> </Route>
        <Route path='/software_solution/mobile_app_development' exact> <Servicetype data={serviceData.mobile_app_development}/> </Route>
        <Route path='/software_solution/cloud_service' exact> <Servicetype data={serviceData.cloud_service}/> </Route>
        <Route path='/software_solution/learning_center' exact> <Servicetype data={serviceData.cloud_service}/> </Route>





        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
