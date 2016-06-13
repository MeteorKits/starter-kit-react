Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert({
    service: "google"
  }, {
    $set: {
      clientId: 'XXX',
      secret: 'XXX'
    }
  })

  ServiceConfiguration.configurations.upsert({
    service: "facebook"
  }, {
    $set: {
      appId: 'XXX',
      secret: 'XXX'
    }
  })
})