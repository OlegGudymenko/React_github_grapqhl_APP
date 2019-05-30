import React from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Row,
  Col,
  Badge,
  Button,
  TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';

import { CenteredRow, Label } from  './DefaultComponents';
import RepositoryItem from './RepositoryItem';
import FollowerItem from './FollowerItem';

const MAX_ITEMS_COUNT = 6;
class Tabs extends React.Component {
  state = {
    activeTab: '1'
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render(){
    const { repositories, followers, login, history } = this.props;

    console.log(repositories, ' repositories')
    return (
      <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            <Label>Repositories</Label>
            <Badge color="secondary">{repositories.totalCount}</Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            <Label>Followers</Label>
           <Badge color="secondary">{followers.totalCount}</Badge>
          </NavLink>
        </NavItem>
      </Nav>
      <br/>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            {repositories.nodes.map((item, index) => {
              if(index < MAX_ITEMS_COUNT){
                return <RepositoryItem 
                        key={item.id}
                        {...item} 
                        login={login}/>
              } 
              return null
            })}
          </Row>
          {repositories.totalCount > MAX_ITEMS_COUNT && (
            <Row>
              <Col>
                <CenteredRow>
                    <Button
                      color="info"
                      onClick={() => history.push(`/repositories/${login}`)}>
                      See all repositories
                    </Button>
                  </CenteredRow>
              </Col>
            </Row>
          )}

        </TabPane>
        <TabPane tabId="2">
          <Row>
              {followers.nodes.map((item, index) => {
                if(index < MAX_ITEMS_COUNT){
                  return <FollowerItem 
                          key={item.login}
                          {...item}/>
                } 
                return null
              })}
            </Row>
            {followers.totalCount > MAX_ITEMS_COUNT && (
              <Row>
                <Col>
                  <CenteredRow>
                      <Button
                        color="info"
                        onClick={() => history.push(`/followers/${login}`)}>
                        See all Followers
                      </Button>
                    </CenteredRow>
                </Col>
              </Row>
            )}
        </TabPane>
      </TabContent>
    </div>
    )
  }
}


Tabs.propTypes = {
  repositories: PropTypes.object.isRequired,
  followers: PropTypes.object.isRequired,
  login: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Tabs);