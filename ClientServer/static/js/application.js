var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

Utils.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function validatePassword(pw) {
    return pw.length > 0;
}

// Use VEX to show each stymbols stock information
function showFormValidateDialog() {
    var somevar = "";
    vex.open({
        contentClassName: 'validateDialog',
        content: 
            '<p class="validate">Please enter a valid password</h4>',
        overlayClassName:'validateDialogOverlay',
        showCloseButton:true});
}

function validateForm(form) {
    // Call various validate handlers to check for proper values.
    if (validatePassword(form.pw.value) == false) {
        showFormValidateDialog();
        return false;
    }
    console.log("Email: " + form.email.value);
    console.log("Name: " + form.firstname.value + " " + form.lastname.value);
    console.log("City: " + form.city.value);
    console.log("State: " + form.state.value);
    console.log("Zip Code: " + form.zipcode.value);
    if (form.gender[0].checked)
        console.log("Gender: " + form.gender[0].value);
    else if (form.gender[1].checked)
        console.log("Gender: " + form.gender[1].value);
    else
        console.log("Gender: " + "not specified");
    console.log("Stay signed in?: " + form.signin_remember.checked);
    return true; // set to true to have form cleared after submission
}

$(document).ready(function() {

    // Use VEX dialogs to show the application instructions
	function showInfoDialog() {
		vex.open({
			contentClassName: 'infoDialog',
			content: 
				'<h2>Purpose</h2>' +
                '<p>This example is used to show how to code up HTML forms.' +
                '   This will be used as a starting point for server side' +
                '   web form management. The form is a static page and is not' +
                '   a Flask template. The next "server-side" example will be' +
                '   a Flask implementation.</p><br>' +
                '<p>This form is validated client-side, in javascript. If ' +
                '   validation fails, the user can update the form with correct' +
                '   data. Once the form validates, it is submitted to the server' +
                '   for processing. Validating on the client side keeps validation' + 
                '   fast and removes a round-trip HTTP request.</p>',
			overlayClassName:'infoDialogOverlay',
			showCloseButton:false});
	}


    $('#info').click(function() {
		showInfoDialog();
	});

	// jQuery UI code for tooltips
	$(document).tooltip();
});

