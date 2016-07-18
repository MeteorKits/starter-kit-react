var ga_id = 'UA-xxx-yy'; // ADD YOUR GOOGLE ANALYTICS CODE HERE

var ga_set = () => { return ga_id !== 'UA-xxx-yy' };

Meteor.startup(() => {
  if (!ga_set() && console){
      console.log("NO GOOGLE ANALYTICS TRACKING CODE FOUND! ADD YOURS HERE: (/imports/helpers/ga.js)")
  }
})

export let TrackingCode = () => {
  if (ga_set() && typeof document !== 'undefined') {
    if(!document.querySelectorAll('[dochead="1"]')){
      var gaScript = 'https://www.google-analytics.com/analytics.js'
      DocHead.loadScript(gaScript, function () {
        ga('create', ga_id, 'auto')
        ga('send', 'pageview')
      })
    }
  }
}
