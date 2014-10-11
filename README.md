ChromeApp-TLIKiosk

<B>WARNING!</B>
<B>WARNING: TESTING BRANCH! - This branch is used for testing prior to moving to master.</B>
<B>WARNING!</B>

Provides a facility to launch TLI Testing as a single-app kiosk on a Chromebook. ** This is a 3rd party product for accessing but is not provided by The Learning Institute (TLI), tli.net.

Note: This app is intended to be run via single-app kiosk mode as provided via Google Chromebook management only.

Requirements:

Chromebook
Internet Access
TLI Testing Credentials
If you find issues, see if you can fix them and submit a pull request with the changes or file an issue report on GitHub. https://github.com/BentonSchoolDistrict/ChromeApp-TLIKiosk

To Install:

Download TLIKiosk.zip
Extract
Modify icon_16.png, icon_128.png, and SmallTile.png(I never see SmallTile used, but Google requires it to upload to the webstore) as you like
Launch Chrome
Go to Tools > Extensions
Check to enable Developer mode
Load unpacked extension...
Navigate to the extracted folder containing the source contents
Modify as desired (Enable Debug to allow to run on a desktop)
Click Launch
To enable debug mode:

Navigate to the extracted folder containing the source contents
Open application.js in your favorite editor (I use Notepad++, but you can use Notepad.exe or any other text editor/IDE you like that supports JavaScript)
Remove the // before debug = true;
Add // before debug = false; (Change debugurl = "test.tli.net" if you want to debug using another site)
Save
Launch Chrome
Go to Tools > Extension
Click Reload for this application
Click Launch
To rename the app, edit the references in:

application.html
background.js
manifest.json
Upload to your Chrome Web Store

Be sure you have disabled debug mode, unless you intend to publish / use it
Go to: https://chrome.google.com/webstore/developer/dashboard?hl=en&gl=US (Login to your Google Apps domain)
Add New item (For your own Google Apps domain to use the app, you do not have to pay the $5 fee)
Upload the zip file, create a description, choose the icon_128.png for the icon (edit for your environment), choose screenshot1.png for screenshots (take your own if you like), Choose the SmallTile.png, Category "Test Preparation" (or any of them you like). Region: United States, Visibility: Unlisted
Preview changes / Publish changes
When in the Chrome Webstore developer dashboard, click More info next to your uploaded project to obtain your Item ID for use when setting up Single App configuration in Chrome Device Management.
To setup in Chrome Single-App Kiosk

Go to: https://admin.google.com (Login to your Google Apps domain)
Device Management
Chrome
Device Settings
Choose the Organization to apply to
Scroll down to Kiosk Settings
Choose Allow Single App Kiosk
Click Manage Kiosk Applications
Look under Domain Apps, if it's not there (has it finished publishing?), Go to Specify a Custom App, enter the App ID you received from the Chrome Web Store Developer Dashboard here and enter the following for URL: https://clients2.google.com/service/update2/crx
Add
Save
Wait until your Chromebook refresh's policy. ( or Chrome://policy > reload > then reboot (maybe logout?))