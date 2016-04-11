import React from 'react'
import {composeWithTracker} from 'react-komposer'
import SignUp from './components/SignUp'

class SignUpController{
  constructor() {
    this._state = new ReactiveDict
  }
  get state() {
    return {
      errorMessage: this._state.get("errorMessage"),
      hasError: this._state.get("errorMessage") != null

    }
  }

  signUpWithPassword(values){
    if (this._validate(values)){
      this._state.clear()
      Accounts.createUser(values, (err) => {
        if (err){
          this._state.set("errorMessage", err.message);
        } else {
          FlowRouter.go('home')
        }
      })
    }
  }

  _validate(values){
    if (!values.username || !values.password || !values.password_confirmation){
      this._state.set("errorMessage", "Please enter your desired username/email and password (twice).")
      return false
    }
    if (values.password !== values.password_confirmation){
      this._state.set("errorMessage", "Password and confirmation don't match, try again.")
      return false;
    }

    return true
  }

  cleanUp() {
    this._state.clear()
  }
}


let controller = null

function composer (props, onData) {
  if (!controller) controller = new SignUpController()
  const state = controller.state
  onData(null, {controller, state})

  return () => {
    controller.cleanUp()
  }
}

export default composeWithTracker(composer)(SignUp)