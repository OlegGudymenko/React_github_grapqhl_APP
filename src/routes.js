import React from 'react';
import { Switch, Route } from 'react-router'
import { Container } from 'reactstrap';
import Profle from './pages/Profle';

import Header from './components/Header';

const Routes = () => {
  return (
    <React.Fragment>
       <Header/>
       <Container>
        <Switch>
          <Route exact path="/" component={() => (<div> Its a main page</div>)}/>
          <Route path="/profile" component={Profle}/>
        </Switch>
      </Container>
    </React.Fragment>
  )
}

export default Routes;