import {FlowRouter} from 'meteor/kadira:flow-router-ssr'
FlowRouter.setDeferScriptLoading(true);

var timeInMillis = 1000 * 10; // 10s
FlowRouter.setPageCacheTimeout(0) //timeInMillis)