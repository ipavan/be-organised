function addFunction() {
    var tableVal = document.getElementById("tableBody");
    var newRow = tableVal.insertRow(-1);
    var date = newRow.insertCell(0);
    var description = newRow.insertCell(1);
    date.innerHTML = document.getElementById("dateField").value;
    description.innerHTML = document.getElementById("description").value;
    document.getElementById("description").value = "";
}

function deleteFunction() {

}
