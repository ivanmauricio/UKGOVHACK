import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const styles = {color: 'yellow' }

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }

  checkCookie () {
    if (document.cookie.indexOf('reactCookie') > -1) {
      return (
        <div>
        <p style={styles}>{'Welcome ' + this.props.userDetails.screenName}</p>
        <Link to={ '/newAnswer' }>
          <Button bsStyle='success' >share your opinion</Button>
        </Link>
        </div>
      )
    } else {
      return <a style={styles} href='/login-with-twitter'>login with twitter</a>
    }
  }

  render () {
    return (
      <div>
        <Navbar
          expanded={this.state.menuOpen}
          onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
          className='top-menu'
          fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img src={this.props.logoUrl}></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse pullRight>
            <Nav pullRight>
              {this.checkCookie()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
