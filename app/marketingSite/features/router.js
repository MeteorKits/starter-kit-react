import React from 'react'
import {mount} from 'react-mounter'
import Features from './components/Features'
import LandingLayout from '../layout/components/LandingLayout'

FlowRouter.route("/features", {
  name: "Features",
  action() {
    mount(LandingLayout, {content: <Features />})
  }
})
