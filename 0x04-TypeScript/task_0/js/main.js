// Student1-2
var student1 = {
    firstName: "luis",
    lastName: "maxi",
    age: 36,
    location: "barcelona"
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 38,
    location: "London"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "red";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid red";
    locationCell.style.border = "2px solid red";
    nameCell.style.padding = "6px";
    locationCell.style.padding = "6px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);