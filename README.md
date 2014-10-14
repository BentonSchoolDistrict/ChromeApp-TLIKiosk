ChromeApp-TLIKiosk
==================
<B>WARNING!!!</B>  
<B>WARNING:  TESTING BRANCH </B>  
<B>WARNING:  May have lots of revisions and bugs. Testing in progress for move to Master branch </B>  
<B>WARNING!!!</B>  

Provides a facility to launch TLI Testing (or any other website with it's own navigation controls) as a single-app kiosk on a Chromebook.  
  
<I>** This is a 3rd party product for accessing but is not provided by The Learning Institute (TLI), tli.net.</B>  
  
Note: This ChromeApp is intended to be run via single-app kiosk mode as provided via Google Chromebook management only.<BR>  

<BR>
<b>Requirements: </b>
 - Chromebook
 - Internet Access
 - TLI Testing Credentials
  
<B></I>If you find issues: fork the project, make your changes with comments and test. Finally, submit a Pull request on the Development branch or file an issue report on GitHub.</I></B>  
 Project repo: https://github.com/BentonSchoolDistrict/ChromeApp-TLIKiosk  
 How to fork a project: https://help.github.com/articles/fork-a-repo/  
 How to make a pull request: https://help.github.com/articles/using-pull-requests/  
  
<B>To Install:</B>
   1. Download TLIKiosk.zip  (or clone the project with <code>git clone https://github.com/BentonSchoolDistrict/ChromeApp-TLIKiosk</code> )
   2. Extract the zip file
   3. Modify icon_16.png, icon_128.png, and SmallTile.png(I never see SmallTile used, but Google requires it to upload to the webstore) as you like
   3. Launch Chrome
   4. Go to Tools > Extensions
   5. Check to enable Developer mode
   6. Load unpacked extension...
   7. Navigate to the extracted folder containing the source contents
   8. Modify as desired  (Enable Debug to allow to run on a desktop)
   9. Click Launch
   
<B>To enable debug mode:</B>
   1. Navigate to the extracted folder containing the source contents
   2. Open application.js in your favorite editor (I use Notepad++, but you can use Notepad.exe or any other text editor/IDE you like that supports JavaScript)
   3. Remove the <B>//</B> before <code>debug = true;</code>
   4. Add <B>//</B> before <code>debug = false;</code> (Change <code>debugurl = "test.tli.net"</code> if you want to debug using another site)
   5. Save
   6. Launch Chrome
   7. Go to Tools > Extension
   8. Click Reload for this application
   9. Click Launch
   
<B>To rename the app, edit the references in:</B>
  - application.html
  - background.js
  - manifest.json
   
<B>Upload to your Chrome Web Store</B>
  1. Be sure you have disabled debug mode, unless you intend to publish / use it
  2. Go to: https://chrome.google.com/webstore/developer/dashboard?hl=en&gl=US  (Login to your Google Apps domain)
  3. Add New item  (For your own Google Apps domain to use the app, you do not have to pay the $5 fee)
  4. Upload the zip file, create a description, choose the icon_128.png for the icon (edit for your environment), choose screenshot1.png for screenshots (take your own if you like), Choose the SmallTile.png, Category "Test Preparation" (or any of them you like).  Region: United States, Visibility: Unlisted
  5. Preview changes / Publish changes
  6. When in the Chrome Webstore developer dashboard, click More info next to your uploaded project to obtain your Item ID for use when setting up Single App configuration in Chrome Device Management.

<B>To setup in Chrome Single-App Kiosk</B>
  1. Go to:  https://admin.google.com (Login to your Google Apps domain)
  2. Device Management
  3. Chrome
  4. Device Settings
  5. Choose the Organization to apply to
  6. Scroll down to Kiosk Settings
  7. Choose Allow Single App Kiosk
  8. Click Manage Kiosk Applications
  9. Look under Domain Apps, if it's not there (has it finished publishing?), Go to Specify a Custom App, enter the App ID you received from the Chrome Web Store Developer Dashboard here and enter the following for URL: https://clients2.google.com/service/update2/crx
  10. Add
  11. Save
  12. Wait until your Chromebook refresh's policy.  ( or   Chrome://policy  > reload > then reboot (maybe logout?))

 <i>
 Copyright Brian S. Lowrance - Benton School District
 GNU GENERAL PUBLIC LICENSE Version 2
 </i>
