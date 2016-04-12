import React from 'react'
import {LandingPageBrand} from "./LandingNavigation"
import LandingNavigation from "../controllers/LandingNavigation"
import GitHubRibbon from './GitHubRibbon'
import {TrackingCode} from '../../../../imports/helpers/ga'

class LandingLayout extends React.Component {
  render() {
    TrackingCode()
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