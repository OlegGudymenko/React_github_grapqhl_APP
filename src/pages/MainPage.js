import React from 'react'
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { GET_USER } from '../graphql/query'
import client from '../graphql';
import ProfilePresenter from '../components/ProfilePresenter';

import { CenteredRow, ContentContainer } from  '../components/DefaultComponents';
import Spinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchedValue: '',
      loading: false,
      error: '',
      data: null
    }
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      searchedValue: value,
    })
  }

  handleSearch = async () => {
    const { searchedValue } = this.state;

    this.setState({
      loading: true,
      error: '',
      data: null
    });

    try {
      const result = await client.query({
        query: GET_USER,
        variables: {
          login: searchedValue
        }
      })
      
      this.setState({
        loading: false,
        data: result.data.user
      })

      
    } catch(err) {      
      this.setState({
        loading: false,
        error: err,
        data: null
      });
    }
  }

  render(){
    const { searchedValue, loading, error, data } = this.state;

    return (
      <Container>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <FormGroup>
              <Label 
                for="username">
                  Enter username
              </Label>
              <Input 
                value={searchedValue}
                onChange={this.handleChange}
                type="text" 
                name="username" 
                id="username" />
            </FormGroup>
            <CenteredRow>
              <Button
                color="primary" 
                disabled={loading}
                onClick={this.handleSearch}>
                Search
              </Button>
            </CenteredRow>
          </Col>
        </Row>
        <ContentContainer>
          {loading && <Spinner/>}
          {error && <ErrorAlert error={error}/>}
          {data && <ProfilePresenter data={data}/>}
        </ContentContainer>
    </Container>
    )
  }
};

MainPage.propTypes = {
  user: PropTypes.string,
};

export default MainPage;

