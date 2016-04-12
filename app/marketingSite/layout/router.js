import React from 'react'
import {mount} from 'react-mounter'
import LandingLayout from './components/LandingLayout.jsx'
import FourOhFour from './components/FourOhFour'

FlowRouter.notFound = {
  action(){
    mount(LandingLayout, {content: <FourOhFour />})
  }
}