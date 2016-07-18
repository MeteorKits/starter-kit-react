
const users = [
  {
    username: 'admin',
    email: 'admin@test.com',
    password: 'supersecret'
  },
  {
    username: 'testuser',
    email: 'test@test.com',
    password: 'testpassword'
  }
];

function setupDefaultUsers(){
  users.forEach(function (user) {
    console.log(user);
    if (typeof Meteor.users.findOne({ username : user.username }) !== 'object') {
      Accounts.createUser(user);
    }
  });
}

export default setupDefaultUsers;
