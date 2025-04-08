// Initialize Firebase
var config = {
apiKey: "AIzaSyA3clTWhfdff5dAcKd3Qnw2tPzrXdqkijQ",
  authDomain: "decoding-the-future.firebaseapp.com",
  databaseURL: "https://decoding-the-future-default-rtdb.firebaseio.com",
  projectId: "decoding-the-future",
  storageBucket: "decoding-the-future.firebasestorage.app",
  messagingSenderId: "890984979162",

};

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('messages');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.company;
	
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});

function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('messages/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {

		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);
	});

}


