import React from 'react'
import GitHubRibbon from '../../../marketingSite/layout/components/GitHubRibbon'
import {TrackingCode} from '../../../../imports/helpers/ga'
import Header from './Header'

export default (props) => {
  TrackingCode()
  return (
    <div className="app-page">
      <GitHubRibbon style="dark"/>
      <div className="layout">
        <Header />
        {props.layout}
      </div>
    </div>
  )
}