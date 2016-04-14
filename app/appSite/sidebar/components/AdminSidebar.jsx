import React from 'react'
import {isActiveRoute} from '../../../../imports/helpers/routeHerlpers'

export default (props) => {
  return (
    <div className="sidebar">
      <div className="profile-pane">
        <a href="#" onClick={props.signOut}><i className="fa fa-sign-out"></i></a>
        <h2>{props.username}</h2>
      </div>
      <div className="navigation">
        <ul>
          <li className={isActiveRoute("Dashboard") ? "active" : ""}><a href="/app"><i className="fa fa-home"> </i> Dashboard</a></li>
          <li className={isActiveRoute("Admin") ? "active" : ""}><a href="/app/admin"><i className="fa fa-cog"> </i> Admin</a></li>
        </ul>
      </div>
    </div>
  )
}