

export let TrackingCode = () => {
  if (console) console.log("ADD YOUR GOOGLE ANALYTICS TRACKING CODE HERE (/imports/helpers/ga.js)")
  if (typeof document !== 'undefined') {
    if(!document.querySelectorAll('[dochead="1"]')){
      var gaScript = 'https://www.google-analytics.com/analytics.js'
      DocHead.loadScript(gaScript, function () {
        ga('create', 'UA-2437441-17', 'auto') // This is the tracking code for meteorkits.com - no use to you
        ga('send', 'pageview')
      })
    }
  }



}