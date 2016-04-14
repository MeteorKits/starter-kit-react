import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default (props) => {
  return (
    <div className="content">
      {props.sidebar}
      <div className="body">
        <ReactCSSTransitionGroup transitionName="page" transitionAppear={true} transitionAppearTimeout={200} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {props.content}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  )
}