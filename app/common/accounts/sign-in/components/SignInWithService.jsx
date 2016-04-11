import React from 'react'

class SignInWithService extends React.Component {
  signIn() {
    this.props.controller.signInWith(this.props.service)
  }
  render() {
    let classNames = `fa ${this.props.icon}`
    return (
      <a onClick={this.signIn.bind(this)} className="btn"><i className={classNames}> </i> {this.props.label}</a>
    )
  }
}

export default SignInWithService