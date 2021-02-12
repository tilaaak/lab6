'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	
	$.get("https://lab6-tp.herokuapp.com/project/" + idNumber, callBackFn);

	
	
	console.log("User clicked on project " + idNumber);

	
}

/*'<a href="#" class="thumbnail">' +
'<img src="' + projects['image'] + '" class="detailsImage">' +
'<p>' + projects['title'] + '</p>' +
'<p><small>' + projects['date'] +
'</small>' + projects['summary'] + '</p></a>'
*/
function callBackFn(projectData){
	console.log(projectData);
	var idNum = projectData.id;
	console.log(idNum);
	$('#project'+ idNum +' .details').html(
	'<img src="' + projectData['image'] + '" class="detailsImage">' +
	'<p>' + projectData['title'] + '</p>' +
	'<p><small>' + projectData['date'] +
	'</small>' + projectData['summary'] + '</p>');
}
