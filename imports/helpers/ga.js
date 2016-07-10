
export let TrackingCode = () => {
  var ga_id = 'UA-xxx-yy'; // ADD YOUR GOOGLE ANALYTICS CODE HERE

  var gaNotSet = () => { return ga_id === 'UA-xxx-yy' };

  if (gaNotSet() && console){
      console.log("NO GOOGLE ANALYTICS TRACKING CODE FOUND! ADD YOURS HERE: (/imports/helpers/ga.js)")
  }
  else if (typeof document !== 'undefined') {
    if(!document.querySelectorAll('[dochead="1"]')){
      var gaScript = 'https://www.google-analytics.com/analytics.js'
      DocHead.loadScript(gaScript, function () {
        ga('create', ga_id, 'auto')
        ga('send', 'pageview')
      })
    }
  }

}
