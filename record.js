document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const employeeID = document.getElementById('employeeID').value;
    const department = document.getElementById('department').value;
    const exp = document.getElementById('exp').value;
    const email = document.getElementById('email').value;
    const mbl = document.getElementById('mbl').value;

    // Create a new row and cells
    const table = document.querySelector('table tbody');
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const departmentCell = newRow.insertCell(2);
    const expCell = newRow.insertCell(3);
    const emailCell = newRow.insertCell(4);
    const mblCell = newRow.insertCell(5);
    const roleCell = newRow.insertCell(6);
    const deleteCell = newRow.insertCell(7);

    deleteCell.style.color= "red";

    // Assign values to the cells
    nameCell.textContent = name;
    idCell.textContent = employeeID;
    departmentCell.textContent = department;
    expCell.textContent = exp;
    emailCell.textContent = email;
    mblCell.textContent = mbl;
    if(exp > 5){
        roleCell.textContent = "Senior";
    } if (exp >2 && exp <5) {
        roleCell.textContent = "junior";
    } else {
        roleCell.textContent ="fresher";
    }

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = "red";
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });
    deleteCell.appendChild(deleteButton);

    // Clear the form
    document.querySelector('form').reset();
});
