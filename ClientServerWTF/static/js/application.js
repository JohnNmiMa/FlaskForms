var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

Utils.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {

    // Use VEX dialogs to show the application instructions
	function showInfoDialog() {
		vex.open({
			contentClassName: 'infoDialog',
			content: 
				'<h2>Purpose</h2>' +
                '<p>This example show how to code up raw HTML forms in Flask.' +
                '   The form is created in a Flask template which is presented' +
                '   to the user in the startup page. Then, the form is posted' +
                '   to the Flask server and the form data is retrieved from' +
                '   the request. The form data is then displayed in the browser' +
                '   in a new web page (home.html).<p><br>' +
                '<p>This implementation does not use Flask-WTF forms. All form' +
                '   validation is still done in the client in Javascript. When ' +
                '   the form data gets to the Flask server, the data is considered' +
                '   to be valid data.<p>',
			overlayClassName:'infoDialogOverlay',
			showCloseButton:false});
	}

    $('#info').click(function() {
		showInfoDialog();
	});

	// jQuery UI code for tooltips
	$(document).tooltip();
});

