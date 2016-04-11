import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SignInWithService from './SignInWithService'
import NoSSR from 'react-no-ssr'
class SignIn extends React.Component {
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

        <form onSubmit={this.signInWithPassword.bind(this)}>
          <input ref="username" type="text" placeholder="Your username/email"/>
          <input ref="password" type="password" placeholder="Your password"/>
          <a onClick={this.signInWithPassword.bind(this)} className="btn btn-primary"><i className="fa fa-unlock-alt"> </i> Sign In</a>
          <input className="btn hidden" type="submit" value="Sign In"/>
          <NoSSR>
            <span>
              {this.props.state.loginServices.length > 0 ? (<div className="or"><span>OR</span></div>) : null}
              {this.props.state.loginServices.map((service) => {
                return (
                  <SignInWithService key={service.service} controller={this.props.controller} service={service.service} label={`Sign In With ${service.service}`} icon={`fa-${service.service}`}/>
                )
              })}
            </span>
          </NoSSR>
        </form>
      </div>
    )
  }

  signInWithPassword(event) {
    if (event && event.preventDefault) {
      event.preventDefault()
    }

    let values = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }

    this.props.controller.signInWithPassword(values);
  }
}

export default SignIn


