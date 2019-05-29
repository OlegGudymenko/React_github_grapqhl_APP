import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Tabs from './Tabs';

const NO_DATA = 'no data'

const ProfilePresenter = ({ data }) => {
  return (
    <Container>
     <Row>
      <Col md='4'>
        <LinkStyled href={data.url}>
          <img 
            src={data.avatarUrl || 'https://via.placeholder.com/150'}
            alt='profile_image'
            />
        </LinkStyled>
        <ProfileRow>
          <span> Name:  </span>
          <span> {data.name || data.login}</span>
        </ProfileRow>
        <ProfileRow>
          <span> Bio:  </span>
          <span> {data.bio || NO_DATA}</span>
        </ProfileRow>
        <ProfileRow>
          <LinkStyled href={data.url}>Link to Profile</LinkStyled>
        </ProfileRow>
      </Col>
      <Col md='8'>
        <h3>{data.name || data.login}</h3>
        <Tabs 
          login={data.login}
          followers={data.followers}
          repositories={data.repositories}/>
      </Col>
    </Row>
  </Container>
  )
}

const ProfileRow = styled.div `
  margin: 10px 0;
`

const LinkStyled = styled.a `
  padding: 0;
`;


ProfilePresenter.propTypes = {
  data: PropTypes.object.isRequired,
};


export default ProfilePresenter;