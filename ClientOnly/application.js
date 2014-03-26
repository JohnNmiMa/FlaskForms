var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

Utils.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function handleForm(form) {
    // Call various validate handlers to check for proper values.
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
    return true;
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
                '   web form management.</p>',
			overlayClassName:'infoDialogOverlay',
			showCloseButton:false});
	}

    $('#info').click(function() {
		showInfoDialog();
	});

	// jQuery UI code for tooltips
	$(document).tooltip();
});

