import React from 'react'

class GuestFooter extends React.Component {
  render() {
    var gaScript = 'https://www.google-analytics.com/analytics.js'
    DocHead.loadScript(gaScript, function () {
      // Google Analytics loaded
      ga('create', 'UA-2437441-17', 'auto')
      ga('send', 'pageview')
    })
    return (

      <div className="footer">
        Made with <i className="fa fa-heart"> </i> by <a href="https://meteorkits.com">Meteorkits</a>
      </div>

    )

  }
}

export default GuestFooter