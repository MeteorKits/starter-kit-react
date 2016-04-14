const isActiveRoute = (routeName) => {
  return FlowRouter.getRouteName() === routeName
}

export {isActiveRoute}