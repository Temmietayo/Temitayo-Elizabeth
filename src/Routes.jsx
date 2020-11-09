import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RSignup from './component/container/SignUp/RSignup/RSignup';
import RSignup2 from './component/container/SignUp/RSignup/RSignup2';
import Successful from './component/common/Success/Successful';
import RSignin from './component/container/SignIn/RSignin';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={RSignup} />
    <Route exact path="/researcher/cont-signup" component={RSignup2} />
    <Route exact path="/researcher/account-successful" component={Successful}/>
    <Route exact path="/researcher/signin" component={RSignin}/>
  </Switch>
);

export default Routes;
