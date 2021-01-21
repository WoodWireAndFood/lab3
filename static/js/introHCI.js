'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(buttonClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

function buttonClick(e) {
    console.log("Button clicked.");
    var butMsgs = ["JavaScript is connected", "Connected, JavaScript is", "By Jove, JavaScript is connected", "Gadzooks! I have connected the Script of Javaness"];
    var text = butMsgs[Math.floor(Math.random() * 4)];
    $('.jumbotron h1').text(text);
    butMsgs = ["Test JavaScript", "The JavaScript, test it", "Test that JS!"]
    text = butMsgs[Math.floor(Math.random() * 3)];
    $("#testjs").text(text);
    $(".jumbotron p").toggleClass("active");
}

function projectClick(e) {
    console.log("Project clicked");
    e.preventDefault();
    $(this).css("background-color", "green");
    var containingProject = $(this).closest(".project"); // Get the closest project element to the thing clicked
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        containingProject.append("<div class='project-description'><p>Clickity clickity.</p></div>");
    }
    else {
        description.html("<p>Pls to stop clicking! Last click was " + (new Date()) + "</p>");
    }
}
