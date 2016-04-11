import React from 'react'
import KitFeatures from './StarterKitFeatures'
import KitLinks from './KitLinks'

class Features extends React.Component {
  render() {
    return (
      <div className="page-features">
        <KitFeatures />
        <div className="cta">
          <p className="blurb">This starter kit is ready to use in your next Meteor project, please make sure you contribute back to this project by submitting pull requests on the Github project.</p>
          <a className="btn-go" href="/elements">Bootstrap Components</a>
        </div>
      </div>
    )
  }
}

export default Features
