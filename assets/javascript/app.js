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
event.preventDefault();
empName = $("#employee-name").val().trim();
empRole = $("#employee-role").val().trim();
empStart = $("#employee-start").val().trim();
empRate = $("#employee-rate").val().trim();


database.ref().push({
    empName: empName,
    empRole: empRole,
    empStart: empStart,
    empRate: empRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
    console.log(empName, empRole, empStart, empRate);
});

database.ref().on("child_added", function(snapshot) {
// storing the snapshot.val() in a variable for convenience
var sv = snapshot.val();

// Console.loging the last user's data
console.log(sv.empName, sv.empRole, sv.empStart, sv.empRate);

// Change the HTML to reflect
$("#employee-name").text(sv.empName);
$("#employee-role").text(sv.empRole);
$("#employee-start").text(sv.empStart);
$("#employee-name").text(sv.empRate);

// Handle the errors
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});