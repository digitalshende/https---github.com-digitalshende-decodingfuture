document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace with your actual authentication logic
  if (username === "ittools@gmail.com" && password === "shreya821") {
    // Successful login
    alert("Login successful!");
    // Redirect to admin console or perform other actions
    window.location.href = "admindashboard.html"; // Example: Redirect to a dashboard
  } else {
    // Failed login
    alert("Invalid username or password.");
  }
});
 function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
            document.querySelector('.hamburger').classList.toggle('active');
        }