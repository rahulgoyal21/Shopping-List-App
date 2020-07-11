import React, { Component, Fragment } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Container,
  Collapse,
  NavbarBrand,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(".....", isAuthenticated);
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {!isAuthenticated ? (
                  <Container>
                    <NavItem>
                      <LoginModal />
                    </NavItem>
                    <NavItem>
                      <RegisterModal />
                    </NavItem>
                  </Container>
                ) : (
                  <Container>
                    <span className="navbar-text mr-3">
                      <strong>{user && `Welcome ${user.name}`}</strong>
                    </span>
                    <NavItem>
                      <Logout />
                    </NavItem>
                  </Container>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
