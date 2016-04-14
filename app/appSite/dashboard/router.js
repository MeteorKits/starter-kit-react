import React from 'react'
import {mount} from 'react-mounter'
import AppLayout from '../layout/containers/AppLayout'
import AdminLayout from './../layout/components/AdminLayout'
import AdminSidebar from '../sidebar/containers/AdminSidebar'
import DashboardPage from './components/DashboardPage'

FlowRouter.route("/app", {
  name: "Dashboard",
  action() {
    mount(AppLayout, {layout: <AdminLayout sidebar={<AdminSidebar />} content={<DashboardPage key="dashboard" />} />})
  }
})