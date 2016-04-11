import React from 'react'
import {LandingPageBrand} from "./LandingNavigation"
import LandingNavigation from "../controllers/LandingNavigation"
import GitHubRibbon from './GitHubRibbon'

class LandingLayout extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <GitHubRibbon />
        <div className="hero"></div>
        <header>
          <LandingPageBrand />
          <LandingNavigation />
        </header>
        { this.props.content }
      </div>
    )
  }
}

export default LandingLayout