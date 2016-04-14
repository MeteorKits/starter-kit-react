import React from 'react'
import {mount} from 'react-mounter'
import AppLayout from '../layout/containers/AppLayout'
import AdminLayout from './../layout/components/AdminLayout'
import AdminSidebar from '../sidebar/containers/AdminSidebar'
import AdminPage from './components/AdminPage'

FlowRouter.route("/app/admin", {
  name: "Admin",
  action() {
    mount(AppLayout, {layout: <AdminLayout sidebar={<AdminSidebar />} content={<AdminPage key="admin" />} />})
  }
})