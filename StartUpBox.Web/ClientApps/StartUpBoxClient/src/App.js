import React from 'react';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from "./Layout/SharedLayout";
import PublicLayoutRoute  from  "./Layout/PublicLayout";
import {DashboardLayoutRoute} from "./Layout/DashboardLayout";


/** Components **/
import WelcomPage from './Pages/welcom';
import loginPageContainer from './Pages/UserPublicSection/LoginPageContainer'  
 

 

function App( ) {
  return (
    

      <SharedLayout>
       
      <Switch>

          <Route exact path="/">
              <Redirect to="/login" />
          </Route>  
        
              <Route path={["/login"]}>
                  <PublicLayoutRoute className="row">
                   
                    <Switch>
                          <Route path="/login" component={loginPageContainer} />      
                     </Switch>
                  </PublicLayoutRoute>
             </Route>

        

          <Route path={["/dashboard"]}>
              <DashboardLayoutRoute>
                  <Switch>
                      <Route   path="/Dashboard/welcomPage" component={WelcomPage} />
                    
                  </Switch>
              </DashboardLayoutRoute>
          </Route>



      

          
          </Switch>  
          </SharedLayout>
  );
}

export default App;
