import React from 'react'
import {composeWithTracker} from 'react-komposer'
import {LandingNavigation} from '../components/LandingNavigation'

const logout = () => {
  Meteor.logout((err) => {
    FlowRouter.go("home")
  })
}

function composer(props, onData) {
  let user = Meteor.user()
  let activeRoute = FlowRouter.getRouteName()
  onData(null, {user, logout, activeRoute})
}

export default composeWithTracker(composer)(LandingNavigation)