// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyA3clTWhfdff5dAcKd3Qnw2tPzrXdqkijQ",
  authDomain: "decoding-the-future.firebaseapp.com",
  databaseURL: "https://decoding-the-future-default-rtdb.firebaseio.com",
  projectId: "decoding-the-future",
  storageBucket: "decoding-the-future.firebasestorage.app",
  messagingSenderId: "890984979162",

};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}