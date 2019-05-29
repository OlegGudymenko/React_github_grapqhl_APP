import React from 'react'
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { Container, Row, Col } from 'reactstrap';
import { GET_FOLLOWERS } from '../graphql/query'

import { ContentContainer } from  '../components/DefaultComponents';

import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'
import FollowerItem from '../components/FollowerItem'

const Followers = ({ login }) => (
  <ContentContainer>
    <Query 
      query={GET_FOLLOWERS}
      variables={{
        login
      }}>

      {({ loading, error, data }) => {
        if (loading) return <Spinner/>;
        if (error) return <ErrorAlert error={error}/>

        if(data) {
          const { followers, name } = data.user;
          
          return (
           <Container>
             <Row>
                <Col><h2>  {name || login} followers </h2></Col>
                <br/>
              </Row>
              <Row>
                {followers.nodes.map((item) => (
                  <FollowerItem 
                    key={item.login}
                    {...item}/>
                ))}
              </Row>
           </Container>
          )
        }
      }}
    </Query>
  </ContentContainer>
)

Followers.propTypes = {
  login: PropTypes.string.isRequired,
};


export default Followers;