import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  Col,
  Card, 
  CardTitle, 
  CardText,
} from 'reactstrap';
import { Label } from  './DefaultComponents';

const NO_INFORMATION = 'No information';

const RepositoryItem = (props) => (
  <Col sm={props.blockSize} >
    <CardContainer>
      <Card body>
        <CardTitle>
          <Label> Name: </Label>
          {props.name}
          </CardTitle>
        <CardText>
          <Label> Description: </Label>
          {props.description || NO_INFORMATION}
        </CardText>
        <CardText>
          <Label> Technology: </Label>
            {props.languages.nodes.map((item) => (
              <LanguageLabel key={item.name} color={item.color}>{item.name}</LanguageLabel>
            ))}
        </CardText>
        <Button onClick={() => {
          window.location.href=`https://github.com/${props.login}/${props.name}`
        }}>Show on github</Button>
      </Card>
    </CardContainer>
  </Col>
);


RepositoryItem.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  languages: PropTypes.object.isRequired,
  blockSize: PropTypes.string
};

RepositoryItem.defaultProps = {
  blockSize: '6'
}

const LanguageLabel = styled(Label)`
  ${({ color }) => `
    color: ${color}
  `};
`

const CardContainer = styled.div`
  margin-bottom: 15px;
`;

export default RepositoryItem;