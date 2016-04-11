import React from 'react'
import {DocHead} from 'meteor/kadira:dochead'

class Home extends React.Component{
  render() {
    var metaInfo = {name: "description", content: "Meteor application with SSR and React components"};
    DocHead.addMeta(metaInfo);
    DocHead.setTitle("Shoot for the stars")
    return (
      <div className="cta">
        <h1>Shoot for the stars</h1>
        <h2>Meteor is the future and It's happening right now!</h2>
        <a className="btn-go" href="/features">Get Started</a>
      </div>
    )
  }
}

export default Home