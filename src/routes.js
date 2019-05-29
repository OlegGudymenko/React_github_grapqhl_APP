import React from 'react';
import { Switch, Route } from 'react-router'
import { Container } from 'reactstrap';
import Header from './components/Header';

import MainPage from './pages/MainPage';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers'; 
import NotFound from './pages/NotFound'

const Routes = () => {
  return (
    <React.Fragment>
       <Header/>
       <Container>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/profile/:login" 
            render={({ match }) => {
            return <Profile login={match.params.login}/>
          }} />
          <Route exact path='/followers/:login' render={({ match }) => {
            return <Followers login={match.params.login}/>
          }} />
          <Route exact path="/repositories/:login" render={(props) => {
            return <Repositories login={props.match.params.login}/>
          }}/>
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </Container>
    </React.Fragment>
  )
}

export default Routes;