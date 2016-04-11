import React from 'react'
import {LandingNavigation, LandingPageBrand} from './LandingNavigation'
import GitHubRibbon from './GitHubRibbon'

class LoginLayout extends React.Component {
  render() {
    return (
      <div className="accounts-page">
        <GitHubRibbon />
        <div className="hero"></div>
        <header>
          <LandingPageBrand />
          <LandingNavigation />

        </header>
        <div className="accounts-content">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <div>
            { this.props.content }
            { this.props.footer }
          </div>
        </div>
      </div>
    )
  }
}

export default LoginLayout