import React from 'react'
import {composeWithTracker} from 'react-komposer'
import AppLayout from  '../components/AppLayout'

const composition = (props, onData) => {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    setTimeout(() => { FlowRouter.go('/')})
  }else{
    onData(null, props)
  }

}

export default composeWithTracker(composition)(AppLayout)