import React from 'react'
import {composeWithTracker} from 'react-komposer'
import AdminSidebar from '../components/AdminSidebar'

const signOut = (e) => {
  if (e) {
    e.preventDefault()
  }
  Meteor.logout()
}

const composition = (props, onData) => {
  let username = Meteor.user() ? Meteor.user().profile.name : ''
  let activeRoute = FlowRouter.getRouteName()
  onData(null, {username, signOut,activeRoute})
}

export default composeWithTracker(composition)(AdminSidebar)