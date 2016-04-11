import React from 'react'
import Buttons from './Buttons'
import Typography from './Typography'
import Grid from './Grid'

class Elements extends React.Component {
  render() {
    return (
      <div className="page-elements">
        <Buttons />
        <Typography />
        <Grid />
        <h2>TODO : Add bootstrap components here...</h2>
      </div>
    )
  }
}

export default Elements
