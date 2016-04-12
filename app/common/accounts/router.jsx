import {FlowRouter} from 'meteor/kadira:flow-router-ssr'
import React from 'react'
import {mount} from 'react-mounter'
import LoginLayout from './layout/components/LoginLayout'
import SignIn  from './sign-in/controller'
import SignUp from './sign-up/controller'

import GuestFooter from './layout/components/GuestFooter'


FlowRouter.route("/sign-in", {
  name: "SignIn",
  action(){
    mount(LoginLayout, {content: <SignIn />, title: "Hello You!", subTitle: "Just sign in", footer: <GuestFooter />})
  }
})

FlowRouter.route("/sign-up", {
  name: "SignUp",
  action() {
    mount(LoginLayout, {content: <SignUp />, title: "To infinity & BEYOND!", subTitle: "Almost there, just sign up", footer: <GuestFooter />})
  }
})
