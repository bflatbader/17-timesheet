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

    // Clear form
    $("#employee-name").val("");
    $("#employee-role").val("");
    $("#employee-start").val("");
    $("#employee-rate").val("");
});

database.ref().on("child_added", function(snapshot) {
// storing the snapshot.val() in a variable for convenience
var sv = snapshot.val();

// Console.loging the last user's data
console.log(sv.empName, sv.empRole, sv.empStart, sv.empRate);

// Calculate Months Worked and Total Billed
monthsWorked = moment().diff(sv.empStart, "months");
totalBilled = monthsWorked * sv.empRate;

// Change the HTML to reflect
empTable = `
        <tr>
        <td>${sv.empName}</td>
        <td>${sv.empRole}</td>
        <td>${sv.empStart}</td>
        <td>${monthsWorked}</td>
        <td>${sv.empRate}</td>
        <td>${totalBilled}</td>
        </tr>
`;

$('#employeeTable').append(empTable);

// Handle the errors
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});
