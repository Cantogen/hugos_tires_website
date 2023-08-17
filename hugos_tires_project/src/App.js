import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './Components/Navigation';

function App() {
  return (

  <div className='App'>
    <Switch>                
      <Route path='/OurServices' component={OurServices}/>
      <Route path='/AboutUs' component={AboutUs}/> 
      <Route path='/InspectionAndServiceFees' component={InspectionAndServiceFees}/>               
      <Route path='/ContactUs' component={ContactUs}/> 
      <Route path='/' component={Home}/>            
    </Switch>
 </div>

  );
}

export default App;
