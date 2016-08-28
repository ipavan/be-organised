var counter = 0

function addFunction() {
	if (document.getElementById("description").value == "") {
		return;
	}
    var tableVal = document.getElementById("tableBody");
    var newRow = tableVal.insertRow(-1);
    newRow.id = counter;
    counter = counter + 1;
    var date = newRow.insertCell(0);
    var description = newRow.insertCell(1);
    var delEd = newRow.insertCell(2);
    date.innerHTML = document.getElementById("dateField").value;
    description.innerHTML = document.getElementById("description").value;
    delEd.innerHTML = '<button type="button" id="' + counter + '" class="btn btn-danger" onclick = "deleteFunction(this)">x</button>';
    document.getElementById("description").value = "";
}

function deleteFunction(x) {
    var row = x.parentNode.parentNode.rowIndex;
    document.getElementById("mainTable").deleteRow(row);
}

/*$(document).ready (function(){
    $("#warning-alert").hide();
    $("#addButton").click(function showAlert() {
        $("#warning-alert").alert();
        $("#warning-alert").fadeTo(2000, 500).slideUp(500, function(){
            $("#warning-alert").slideUp(500);
        });
    });
});*/

