import setupBrowserPolicy from './config/security.js';
import setupSocialAccounts from './config/social_accounts.js';

setupBrowserPolicy(BrowserPolicy);

Meteor.startup(() => {
  // setupSocialAccounts();
});
