import React from 'react'
import {mount} from 'react-mounter'
import Elements from './components/Elements'
import LandingLayout from '../layout/components/LandingLayout'

FlowRouter.route("/elements", {
  name: "Elements",
  action() {
    mount(LandingLayout, {content: <Elements />})
  }
})