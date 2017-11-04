import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { getUserInfo } from '../store/actions';

class SiteNavComponent extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const admin = this.admin();
    const user = this.user();
    const userIcon = this.userIcon();
    const authUrl = this.authUrl();

    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="navbar-brand">Le New Blog</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          {admin ?
            <Nav>
              <LinkContainer to="/new">
                <NavItem>New</NavItem>
              </LinkContainer>
            </Nav>
          : null}
          <Nav pullRight>
            {user ?
              <NavItem>{user}</NavItem>
            : null}
            <NavItem href={authUrl}>{userIcon}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  admin() {
    return this.props.userInfo && this.props.userInfo.admin;
  }

  user() {
    return this.props.userInfo && this.props.userInfo.user;
  }

  userIcon() {
    if (this.loggedIn()) {
      return <span className="glyphicon glyphicon-log-out"></span>;
    } else {
      return <span className="glyphicon glyphicon-log-in"></span>;
    }
  }

  loggedIn() {
    return this.props.userInfo && this.props.userInfo.user;
  }

  authUrl() {
    return this.props.userInfo && this.props.userInfo.auth;
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(getUserInfo());
    }
  };
}

const SiteNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteNavComponent);

export default SiteNav;
