/*
Mihir Lele, 5/18/2022

JS file for recipes.html
*/

// opens a new tab and closes the content from the active tab
function openTab(evt, name) {
	// declare variables: i for iteration, tabcontent for the content, tablinks for the tabs
	var i, tabcontent, tablinks;
	
	// iterate through all div elements of class "tabcontent" and stop displaying them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// removes active status of the active tab link
	tablinks = document.getElementsByClassName("active");
	tablinks[0].className = tablinks[0].className.replace(" active", "");
	
	// display the content of the name parameter
	document.getElementById(name).style.display = "block";
	// add active status to the current target of the event
	evt.currentTarget.className += " active";
}