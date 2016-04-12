import React from 'react'
import {DocHead} from 'meteor/kadira:dochead'

class FourOhFour extends React.Component{
  render() {
    DocHead.setTitle("404 Page Not Found")

    return (
      <div className="not-found">
        <h1>4<span className="muted">0</span>4</h1>
        <h2>The page your trying to visit is on vacation, please try again later.</h2>
      </div>
    )
  }
}

export default FourOhFour