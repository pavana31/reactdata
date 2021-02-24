
import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import './index.css';

import Home from './components/navbar/Home';
// import Main from './components/Main'
import Sidebar from './components/navbar/Sidebar';
// import Home from './components/navbar/Home';

function App() {
    

  return (
    
        <Router>
      
    <div className="App1">
    
     
         {/* <Navbar /> */}
         <Sidebar/>
      
     <Switch>
       
         <Route path= "/Home" exact component={Home}/>
        
         
      
     </Switch>
    

    
    </div>
     </Router>
    
  );
     }

export default App;
