// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkLmCkA2ZySYRKZ8o2PETcDbLwUFSC3Z0",
    authDomain: "timesheet17-64bac.firebaseapp.com",
    databaseURL: "https://timesheet17-64bac.firebaseio.com",
    projectId: "timesheet17-64bac",
    storageBucket: "",
    messagingSenderId: "765354167485",
    appId: "1:765354167485:web:ba6a06aed221c8c3873bd4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var empName = "";
  var empRole = "";
  var empStart;
  var empRate;

  $("#addEmp").click(function(){
      empName = $("#employee-name").val().trim();
      empRole = $("#employee-role").val().trim();
      empStart = $("#employee-start").val().trim();
      empRate = $("#employee-rate").val().trim();

      console.log(empName, empRole, empStart, empRate);
  })