import React from 'react'
import {composeWithTracker} from 'react-komposer'
import SignIn from './components/SignIn'
import _ from 'lodash'

export class SignInController {
  constructor() {
    this._state = new ReactiveDict
    let loginServices = Accounts.loginServiceConfiguration.find().fetch()
    this._state.set("loginServices", loginServices)
    
  }

  get state() {
    return {
      errorMessage: this._state.get("errorMessage"),
      hasError: this._state.get("errorMessage") != null,
      loginServices: this._state.get("loginServices")
    }
  }

  signInWith(service) {
    Meteor[`loginWith${_.capitalize(service)}`]((err) => {
      if (err) {
        this._state.set("errorMessage", "Login Failed")
      } else {
        FlowRouter.go("home")
      }
    })
  }

  signInWithPassword(values) {
    if (this._valid(values)) {
      this._state.set("errorMessage", null)
      Meteor.loginWithPassword(values.username, values.password, (err, resp) => {
        if (err) {
          this._state.set("errorMessage", "Login Failed")
        } else {
          FlowRouter.go("home")
        }
      })
    } else {
      this._state.set("errorMessage", "Please enter a username and password")
    }
  }

  _valid(values) {
    return (values.username && values.password)
  }

  cleanUp() {
    this._state.clear()
  }

}

let controller = null

function composer(props, onData) {
  if (!controller) controller = new SignInController()
  const state = controller.state

  onData(null, {controller, state})

  return () => {
    controller.cleanUp()
    controller = null
  }
}

export default composeWithTracker(composer)(SignIn)