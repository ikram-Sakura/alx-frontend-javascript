interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "luis",
    lastName: "maxi",
    age: 36,
    location: "barcelona"
};

const student2: Student = {
        firstName: "John",
		lastName: "Doe",
		age: 38,
		location: "London"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "red";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

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