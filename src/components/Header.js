import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Container>
            <Row>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink to="/" activeClassName="active" tag={RRNavLink}>Main Page</NavLink> 
                  </NavItem>
                  <NavItem>
                    <NavLink to="/profile" activeClassName="active" tag={RRNavLink}>Profile</NavLink> 
                  </NavItem>
                </Nav>
              </Collapse>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}