
const users = [
  {
    username: 'admin',
    email: 'admin@test.com',
    password: 'supersecret',
    admin: true
  },
  {
    username: 'testuser',
    email: 'test@test.com',
    password: 'testpassword'
  }
];

function setupDefaultUsers(){
  users.forEach(function (user) {
    if (typeof Meteor.users.findOne({ username : user.username }) !== 'object') {
      let userid = Accounts.createUser(user);
      if(user.admin){
        Roles.addUsersToRoles(userid, ['admin'], Roles.GLOBAL_GROUP);
      }      
    }
  });
}

export default setupDefaultUsers;
