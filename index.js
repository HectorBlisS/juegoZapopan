(function(){

var users = firebase.database().ref('users');

users.on('child_added', function(data){
	//console.log(data.val());
	$('#lista').append('<li><img src="' + data.val().photoURL + '"></li>')
});







})();



var users = firebase.database().ref('users');

function login(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then(function(result){
			// console.log(result.user);
			users.push({
				displayName: result.user.displayName,
				photoURL: result.user.photoURL
			});
		})
		.catch(function(error){
			alert(error)
		});
}