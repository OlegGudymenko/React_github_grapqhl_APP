import React from 'react'
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { GET_USER } from '../graphql/query'

import { ContentContainer } from  '../components/DefaultComponents';

import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'
import ProfilePresenter from '../components/ProfilePresenter';

const Profile = ({ login }) => (
  <ContentContainer>
    <Query 
      query={GET_USER}
      variables={{
        login
      }}>

      {({ loading, error, data }) => {
        if (loading) return <Spinner/>;
        if (error) return <ErrorAlert error={error}/>
        if(data) return <ProfilePresenter data={data.user}/>
      }}
    </Query>
  </ContentContainer>
)

Profile.propTypes = {
  login: PropTypes.string.isRequired,
};

export default Profile;