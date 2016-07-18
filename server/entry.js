import setupBrowserPolicy from './config/security.js';
import setupSocialAccounts from './config/social_accounts.js';
import setupDefaultUsers from './loaders/users.js';

setupBrowserPolicy(BrowserPolicy);

Meteor.startup(() => {
  setupDefaultUsers();
  // setupSocialAccounts();
});
