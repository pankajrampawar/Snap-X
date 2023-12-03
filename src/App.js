import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandiingPage';
import UsingSnapX from './components/UsingSnapX';
import Account from './components/Account';
import ManageProjects from './components/ManageProjects';
import ManageBilling from './components/Billing';
import Authenticate from './components/Authenticate';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/help/usingSnapX' element={<UsingSnapX/>} />
            <Route path='/help/managingAccount' element={<Account/>} />
            <Route path='/help/manageProjects' element={<ManageProjects/>}/>
            <Route path='/help/manageBilling' element={<ManageBilling/>} />
            <Route path='/help/Authenticate' element={<Authenticate/>}/>
            <Route path='help/Support' element={<GetInTouch/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
