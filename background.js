/////////////////////////////////////////////////////////////////////
// background.js
// Handles background jobs for the app
//
// ChromeApp:  BPSD - TLI KIOSK
// Author:  Brian S. Lowrance  brian@bentonschools.org
// Version: 1.0.0.8
//
// Copyright - Benton School District - All rights reserved
/////////////////////////////////////////////////////////////////////

var appWin = null;

chrome.app.runtime.onLaunched.addListener(function() {
	var options = {
		'id': 'BPSD - TLI Kiosk',
		'state': 'maximized',
		'resizable': false,
		'bounds': {
			'width': 1024,
			'height': 768
		}
	};
	chrome.app.window.create('application.html', (options), onWindowCreated);
});	

function onWindowCreated(win) {
	appWin = win
	appWin.onBoundsChanged.addListener(function() {
		//appWin.maximize();
		appWin.fullscreen();
	});
};
