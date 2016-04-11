import React from 'react'

class LandingNavigation extends React.Component {
  activeClass(routeName) {

    return FlowRouter.getRouteName() === routeName ? "active" : ""
  }

  guestNavigation() {
    return (
      <nav className="nav-primary">
        <ul className="clearfix">

          <li className={this.activeClass('Features')}>
            <a href="/features">Features<span className="line"> </span></a>
          </li>
          <li className={this.activeClass('Elements')}>
            <a href="/elements">Elements<span className="line"> </span></a>
          </li>
          <li className={this.activeClass('SignUp')}>
            <a href="/sign-up">Sign Up<span className="line"> </span></a>
          </li>
          <li className={this.activeClass('SignIn')}>
            <a href="/sign-in">Sign In<span className="line"> </span></a>
          </li>
        </ul>
      </nav>
    )
  }

  navigation(username) {
    return (
      <nav className="nav-primary">
        <ul className="clearfix">

          <li >
            <a href="/app/">Dashboard<span className="line"> </span></a>
          </li>
          <li >
            <a href="/app/admin">Admin<span className="line"> </span></a>
          </li>
          <li key="SignOut" className={this.activeClass('SignOut')}>
            <a onClick={this.signOut.bind(this)} href="#">Sign Out ({username})<span className="line"> </span></a>
          </li>

        </ul>
      </nav>
    )
  }

  render() {
    if (this.props.user) {
      return this.navigation(this.props.user.profile.name)
    } else {
      return this.guestNavigation()
    }
  }

  signOut(event) {
    if (event && event.preventDefault) {
      event.preventDefault()
    }

    this.props.logout()
    return false;
  }


}

class LandingPageBrand extends React.Component {
  render() {
    return (
      <a href="/"><h1>ACME <span className="muted"> INC</span></h1></a>
    )
  }
}


export {LandingNavigation, LandingPageBrand}