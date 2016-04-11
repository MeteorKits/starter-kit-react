import React from 'react'

export default (props) => {
  return (
    <div className="starter-features">
      <h1>Starter Kit <span className="muted">(ReactJS Edition)</span></h1>
      <h2>Jump start your next Meteor/React project</h2>
      <div className="row lists">
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li><i className="fa fa-check"> </i>Meteor 1.3</li>
            <li><i className="fa fa-check"> </i>ReactJS 15</li>
            <li><i className="fa fa-check"> </i>Sass</li>
            <li><i className="fa fa-check"> </i>React-Komposer</li>
            <li><i className="fa fa-check"> </i>FlowRouterSSR</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li><i className="fa fa-check"> </i>Clean project Structure</li>
            <li><i className="fa fa-check"> </i>Containers/Controllers</li>
            <li><i className="fa fa-check"> </i>React accounts UI</li>
            <li><i className="fa fa-check"> </i>Marketing Site & App Site</li>
            <li><i className="fa fa-check"> </i>Server Side Rendering</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-unstyled">
            <li><i className="fa fa-check"> </i>Beautiful modern design</li>
            <li><i className="fa fa-check"> </i>Free & Open Source</li>
            <li><i className="fa fa-check"> </i>Used in a production app</li>
            <li><i className="fa fa-check"> </i>Actively Maintained</li>
            <li><i className="fa fa-check"> </i>ES2015 Syntax</li>
          </ul>
        </div>
      </div>
    </div>
  )
}