import React from 'react'
import {mount} from 'react-mounter'
import Home from './components/Home'
import LandingLayout from '../layout/components/LandingLayout'

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(LandingLayout, {content: <Home />})
  }
})
