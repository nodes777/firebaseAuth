//var userId;
// var users = firebase.database().ref('users/');
// var currUser = firebase.database().ref('users/' + userId);
// console.log(users)
// console.log(currUser)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    console.log(`User uid: ${user.uid}`);
    console.log(`User Name: ${user.displayName}`)
    var portfolio = {"key":"information"}

    var userId = firebase.auth().currentUser.uid;
	getUserPortfolio(userId)

  } else {
    console.log(`User not signed in`)
  }
});


// Get a reference to the database service
var database = firebase.database();


// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
function writeUserData(userId, name, email, imageUrl, portfolio) {
  firebase.database().ref('users/' + userId).set({
    //username: name,
    //email: email
    portfolio: portfolio
  });
}


function writeUserPortfolrio(userId, portfolio) {
  firebase.database().ref('users/' + userId).set({
    portfolio: portfolio
  });
}

function getUserPortfolio(userId) {
  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
	  var portfolio = snapshot.val().portfolio;
	  console.log(portfolio)
	});
}