import React from 'react'
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { Container, Row, Col } from 'reactstrap';
import { GET_REPOSITORIES } from '../graphql/query'

import { ContentContainer } from  '../components/DefaultComponents';

import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'
import RepositoryItem from '../components/RepositoryItem'

const Repositories = ({ login }) => (
  <ContentContainer>
    <Query 
      query={GET_REPOSITORIES}
      variables={{
        login
      }}>

      {({ loading, error, data }) => {
        if (loading) return <Spinner/>;
        if (error) return <ErrorAlert error={error}/>

        if(data) {
          const { repositories, name } = data.user;
          return (
           <Container>
             <Row>
                <Col><h2>  {name || login} repositories  </h2></Col>
                <br/>
              </Row>
              <Row>
              
                {repositories.nodes.map((item) => (
                  <RepositoryItem 
                    blockSize='4'
                    key={item.id}
                    {...item} 
                    login={login}/>
                ))}
              </Row>
           </Container>
          )
        }
      }}
    </Query>
  </ContentContainer>
)

Repositories.propTypes = {
  login: PropTypes.string.isRequired,
};


export default Repositories;