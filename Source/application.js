/////////////////////////////////////////////////////////////////////
// application.js
// Handles foreground application
//
// ChromeApp:  BPSD - TLI KIOSK
// Author:  Brian S. Lowrance
// Version: 1.0.0.10
//
/////////////////////////////////////////////////////////////////////

//Development Notes:
// When a user clicked on "Debug" after navigating, it only showed data the first time.  Clicking Debug to close and then clicking it again to re-review data resulted in a blank debug data page.

window.onload = function() {
	//var debug = false;  // Normal operation
	var debug = true;  //Enables Debug button to output sites HTML code for review.  Disables Chromebook only restriction.
	var debugurl = "http://test.tli.net"; //URL to launch when in debug mode.
	var normalurl = "http://test.tli.net";  //URL to launch when not running in debug mode.
	var debugshowing = false; //Toggle used when the debug button is pressed.
	var debugdata = "";
	var ua = window.navigator.userAgent;
	var bol_isChromebook = ua.search("CrOS");
	var wv = document.getElementById("MyWebView");
	var dwv = document.getElementById("DebugWebView");
	var msgfield = document.getElementById("MsgFieldTxt");
	var promptdiv = document.getElementById("PromptDiv");
	var prompttxt = document.getElementById("PromptTxt");
	var logoutbutton = document.getElementById("logoutbutton");
	promptdiv.className = 'PromptHide';
	dwv.className = "DebugHide"; //Hide Debug Webview;

	wv.addEventListener("loadstart", function() {
		//Let the user know we are working on a page load
		msgfield.innerText = "Loading...";
		debugdata = "";
	});
	wv.addEventListener("loadstop", function() {
		//Page load complete, clear the message
		msgfield.innerText = "";
	});
	wv.addEventListener("dialog", function(e){
		// Tell webview to not block the dialog immediately.
		e.preventDefault();
		//Prompt the user using our own prompt, since JS alert, prompt, display prompts are not allowed in Chrome Apps.
		prompttxt.innerHTML = "<BR><BR><HR>" + e.messageText + "<HR>";
		promptdiv.className = 'PromptShow';
		//Setup a method to handle the users response
		document.querySelector('#PromptOK').onclick = function() {
			//Send the users answer to the page and hide our prompt
			e.dialog.ok();
			promptdiv.className = 'PromptHide';
		};
		document.querySelector('#PromptCANCEL').onclick = function() {
			//Send the users answer to the page and hide our prompt
			e.dialog.cancel();
			promptdiv.className = 'PromptHide';
		};
	});
   
	if (bol_isChromebook>0){bol_isChromebook = true} else {bol_isChromebook = false};
	if (debug){var bol_isChromebook = 1;}; //Used during development for debugging on a non-Chromebook device.
	if (debug){ document.getElementById("debugbutton").className = 'debug'; } else { document.getElementById("debugbutton").style.display = 'none'; };  // Show "debug" button when debugging application
	if (bol_isChromebook != true) {
		//Device is not a Chromebook, Alert user and exit after 10 seconds
		chrome.app.window.current().maximize();
		msgfield.innerHTML = "";
		msgfield.innerHTML = "<font color='red'><B>ERROR:</B><BR> This application is restricted to use on a Chromebook.<BR> This device/browser detected does not appear to be a Chromebook.<BR><BR>Application will close in a few seconds</font>";
		window.setTimeout(function(){window.close()},10000)
	} else {
		//Device is a Chromebook, let's go...
		//Go Fullscreen
		chrome.app.window.current().fullscreen();
		//Go get the content and display it.
		if (debug){
			wv.src = debugurl; //Launch desired URL for debugging
		} else {
			wv.src = normalurl;  //Launch normally desired URL
		};
	};
	document.querySelector('#logoutbutton').onclick = function() {
		//Handle logout button click
		window.close();
	};
	document.querySelector('#debugbutton').onclick = function() {
		//Handle debug button click
		if (debugshowing == false) {
			//Debug information is not already showing, show debug data.
			if (debugdata == "") {
				wv.executeScript(
					{code: 'document.documentElement.innerHTML'},
					function(results) {
						// results[0] would have the webview's innerHTML.
						dwv.className = "DebugShow";
						logoutbutton.className = "hide";
						debugdata = results[0];
						dwv.src = "data:text/plain, " + debugdata;
						debugshowing = true;
					}
				);
			} else {
				// debugdata contains the HTML data cached for this page load.
				dwv.className = "DebugShow";
				logoutbutton.className = "hide";
				dwv.src = "data:text/plain, CACHED_DEBUG_DATA:" + debugdata;  //Remove CACHED_DEBUG_DATA: prefix, once debug bug regarding displaying data more than once is resolved.
				debugshowing = true;
			}
		} else {
			//Debug information is already showing, user clicked again. Return to webpage.
			debugshowing = false;
			dwv.className = "DebugHide";
			logoutbutton.className = "logout";
			dwv.src = "data:text/plain, No debug data to show.";
			//wv.go(-1);
		};
	};
}
