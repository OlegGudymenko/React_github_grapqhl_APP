import React from 'react'
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { Container, Row, Col } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';

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

      {({ loading, error, data, fetchMore }) => {
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
              <InfiniteScroll
                pageStart={0}
                initialLoad={false}
                loadMore={() => {
                  fetchMore({
                    variables: {
                      login,
                      after: repositories.pageInfo.endCursor,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      const user = {
                        user: {
                          ...prev.user,
                          repositories: {
                            ...prev.user.repositories,
                            ...fetchMoreResult.user.repositories,
                            nodes: [
                              ...prev.user.repositories.nodes,
                              ...fetchMoreResult.user.repositories.nodes,
                            ],
                          },
                        },
                      };
                      return user;
                    },
                  });
                }}
                hasMore={repositories.pageInfo.hasNextPage}
                loader={<Spinner/>}
               > 
               <Row>
                {repositories.nodes.map((item) => (
                  <RepositoryItem 
                    blockSize='4'
                    key={item.id}
                    {...item} 
                    login={login}/>
                ))}
               </Row>

              </InfiniteScroll>
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