

Meteor.users.deny({
  update() {
    return true;
  }
});

Accounts.onCreateUser((options, user) => {
  if (options.profile) {
    user.profile = options.profile
  } else {
    user.profile = {
      name: user.username
    }
  }
  return user
})