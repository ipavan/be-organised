var counter = 0

function addFunction() {
	if (document.getElementById("description").value == "") {
		//Nothing to be added if the to do list has no item to do
		return;
	}

    var tableVal = document.getElementById("tableBody");
    var newRow = tableVal.insertRow(-1);

    //give each row a unique id
    newRow.id = counter;
    counter = counter + 1;

    //insert date, description and delete cell buttons
    var date = newRow.insertCell(0);
    var description = newRow.insertCell(1);
    var delEd = newRow.insertCell(2);

    //get the current date value
    var someVal = document.getElementById("dateField").value;

    //add content to each of the three cells in the row
    date.innerHTML = '<input id = "dateField" type="date" value="' + someVal + '" class="form-control">';
    description.innerHTML = '<div contentEditable>' + document.getElementById("description").value;
    delEd.innerHTML = '<button type="button" id="' + counter + '" class="btn btn-danger" onclick = "deleteFunction(this)">x</button>';

    //reset the description input
    document.getElementById("description").value = "";
}

function deleteFunction(x) {
    var row = x.parentNode.parentNode.rowIndex;
    document.getElementById("mainTable").deleteRow(row);
}


