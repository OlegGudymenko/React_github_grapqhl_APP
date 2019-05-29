import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Col,
  Card, 
  CardTitle, 
  CardText,
} from 'reactstrap';
import { Label } from  './DefaultComponents';
import Link from './Link';

const NO_INFORMATION = 'No information';

const FollowerItem = (props) => (
  <Col sm="4">
    <CardContainer>
      <Card body>
       <Link to={`/profile/${props.login}`}>
          <img 
            src={props.avatarUrl || 'https://via.placeholder.com/150'}
            alt='profile_image'
            />
        </Link>
        <CardTitle>
          <Label> Name: </Label>
          {props.name || props.login}
        </CardTitle>
        <CardText>
          <Label> Bio: </Label>
          {props.bio || NO_INFORMATION}
        </CardText>
        <Link to={`/profile/${props.login}`}>
          Go to profile
        </Link>
       
      </Card>
    </CardContainer>
  </Col>
);

FollowerItem.propTypes = {
  avatarUrl: PropTypes.string,
  bio: PropTypes.string,
  login: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const CardContainer = styled.div`
  margin-bottom: 15px;
  & a {
    text-align: center;
  }
`;

export default FollowerItem;