function addFunction() {
	//Adds a new task to the to do list

	if (document.getElementById("description").value == "") {
		//Nothing to be added if the to do list description field is empty
		return;
	}

    var tableVal = document.getElementById("tableBody");
    var newRow = tableVal.insertRow(-1);

    //insert date, description and delete cells
    var date = newRow.insertCell(0);
    var description = newRow.insertCell(1);
    var delEd = newRow.insertCell(2);

    //get the current date value
    var someVal = document.getElementById("dateInput").value;

    var dateValClean = someVal.replace(/-/g, "");

    //add content to each of the three cells in the row
    date.innerHTML = '<input id="dateField" type="date" value="' + someVal + '" class="form-control">';

    //id and value fields added for sorting purposes
    //id is to distinguish between the date and description fields
    //the value attribute is a unhyphened date value used for sorting by dates
    date.setAttribute('id', 'dateField');
    date.setAttribute('value', dateValClean);


    //TODO fix up sort when user changes date
    /*date.addEventListener("input", function() {
    	var x = document.getElementById("dateField");
    	console.log(x);

    	//dateValClean = someVal.replace(/-/g, "");

    	//add content to each of the three cells in the row
    	//date.innerHTML = '<input id="dateField" type="date" value="' + someVal + '" class="form-control">';
	}, false);*/


    description.innerHTML = '<div contentEditable>' + document.getElementById("description").value + '</div>';

    //id field added for sorting
    description.setAttribute('id', 'descriptionField');

    delEd.innerHTML = '<button type="button" class="btn btn-danger" onclick = "deleteFunction(this)">x</button>';

    //reset the description input
    document.getElementById("description").value = "";
    //sortFunction();

}



function deleteFunction(x) {
	//Deletes a task from the to do list

	//get the row that was clicked
    var row = x.parentNode.parentNode.rowIndex;

    //delete entire row
    document.getElementById("mainTable").deleteRow(row);
}



function sortFunction() {
	//Sorts the to do list by date

	var table = document.getElementById("tableBody");
	//dates will contain all date values
	var dates = [];

	//allData is an array containing rowElement objects
	var allData = [];

	//loop over each row
	for (var i = 0, row; row = table.rows[i]; i++) {

		//each newRowElement will store the date and description fields
		var newRowElement = new rowElement();

		//loop over each cell
   		for (var j = 0, col; col = row.cells[j]; j++) {
   			//get the date values
     		if (col.id == "dateField") {
     			dates.push(col.getAttribute("value"));
     			newRowElement.fullDateValue = (col.getAttribute("value"));
     			newRowElement.date = col.innerHTML;
     			//console.log(col.innerHTML);
     		}

     		//get the description
     		if (col.id == "descriptionField") {
     			newRowElement.description = col.innerHTML;
     		}
   		}

   		allData.push(newRowElement);
	}

	dates.sort();

	//At this point all the dates are sorted in the dates array

	//delete the old table
	while(table.hasChildNodes()) {
		table.removeChild(table.firstChild);
	}

	//build the table back up in sorted order
	for (i = 0; i < dates.length; i++) {
		for (j = 0; j < dates.length; j++) {
			if (dates[i] == allData[j].fullDateValue && allData[j].added == false) {
				allData[j].added = true;

				//add the row and cells to the table
				var newRow = table.insertRow(-1);

    			//insert date, description and delete cells
    			var date = newRow.insertCell(0);
    			var description = newRow.insertCell(1);
    			var delEd = newRow.insertCell(2);

    			date.innerHTML = allData[j].date;
    			date.setAttribute('id', 'dateField');
    			date.setAttribute('value', allData[j].fullDateValue);

    			description.innerHTML = allData[j].description;
    			description.setAttribute('id', 'descriptionField');
   				delEd.innerHTML = '<button type="button" class="btn btn-danger" onclick = "deleteFunction(this)">x</button>';
			}
		}
	}


}



function rowElement() {
	this.fullDateValue = "";
	this.date = "";
	this.description = "";
	this.added = false;
}

/*$(document).ready(function() 
    { 
    	$("#mainTable").tablesorter(); 
        $("#addFunction").click(function() {
        	$("#mainTable").trigger("update");
        	var sorting = [[0,0]]; 
        // sort on the first column 
            $("table").trigger("sorton",[sorting]); 
        	return false;
        });
    } 
); */