'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    console.log("Project clicked");
    e.preventDefault();
    $(this).css("background-color", "green");
    var containingProject = $(this).closest(".project"); // Get the closest project element to the thing clicked
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    }
    else {
        description.html("<p>Stop clicking on me! Last click was " + (new Date()) + "</p>");
    }
}
