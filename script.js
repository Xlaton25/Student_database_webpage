document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform validation (e.g., check against database) and retrieve student data
  
  // Dummy data for demonstration
  var studentData = {
    name: "John Doe",
    marks: [
      { subject: "Math", marks: 85 },
      { subject: "Science", marks: 92 },
      { subject: "English", marks: 78 }
    ],
    solutions: [
      "Solution 1",
      "Solution 2",
      "Solution 3"
    ]
  };
  
  // Display the landing page and populate student information
  document.getElementById("studentName").textContent = studentData.name;
  
  var marksTable = document.getElementById("marksTable").getElementsByTagName("tbody")[0];
  marksTable.innerHTML
