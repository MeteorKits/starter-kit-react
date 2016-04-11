import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SignUp extends React.Component{
  renderError() {
    if (this.props.state.hasError) {
      return (
        <ReactCSSTransitionGroup transitionName="alert" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
          <div className="alert alert-danger">{this.props.state.errorMessage}</div>
        </ReactCSSTransitionGroup>
      )
    }
  }
  render() {
    return (
      <div className="sign-in-form">
        {this.renderError()}

        <form onSubmit={this.signUpWithPassword.bind(this)}>
          <input ref="username" type="text" placeholder="Your username/email"/>
          <input ref="password" type="password" placeholder="Your password"/>
          <input ref="password_confirmation" type="password" placeholder="Confirm your password"/>
          <a onClick={this.signUpWithPassword.bind(this)} className="btn btn-primary"><i className="fa fa-unlock-alt"> </i> Sign Up</a>
          <input className="btn hidden" type="submit" value="Sign In"/>

        </form>
      </div>
    )
  }
  signUpWithPassword(event) {
    if (event && event.preventDefault) {
      event.preventDefault()
    }

    let values = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value
    }

    this.props.controller.signUpWithPassword(values);
  }
}

export default SignUp