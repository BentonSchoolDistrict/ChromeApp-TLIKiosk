ChromeApp-TLIKiosk
==================

Provides a facility to launch TLI Testing as a single-app kiosk on a Chromebook.
<I>** This is a 3rd party product for accessing but is not provided by The Learning Institute (TLI), tli.net.</B>

Note: This app is intended to be run via single-app kiosk mode as provided via Google Chromebook management only.

<b>Requirements: </b>
 - Chromebook
 - Internet Access
 - TLI Testing Credentials

 To Install:
   1. Download TLIKiosk.zip
   2. Extract
   3. Modify icon_16.png, icon_128.png, and SmallTile.png(I never see SmallTile used, but Google requires it to upload to the webstore) as you like
   3. Launch Chrome
   4. Go to Tools > Extensions
   5. Check to enable Developer mode
   6. Load unpacked extension...
   7. Navigate to the extracted folder containing the source contents
   8. Modify as desired  (Enable Debug to allow to run on a desktop)
   9. Click Launch
   
 To enable debug mode:
   1. Navigate to the extracted folder containing the source contents
   2. Open application.js in your favorite editor (I use Notepad++, but you can use Notepad.exe or any other text editor/IDE you like that supports JavaScript)
   3. Remove the <B><font color='green'>//</font></B> before <b>debug = true;</b>
   4. Add <B><font color='green'>//</font></B> before <b>debug = false;</b>   (Change debugurl = "test.tli.net" if you want to debug using another site)
   5. Save
   6. Launch Chrome
   7. Go to Tools > Extension
   8. Click Reload for this application
   9. Click Launch
   
 If you find issues, see if you can fix them and submit a pull request or file an issue report.