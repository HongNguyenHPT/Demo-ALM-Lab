'-------------

Browser("HPE Service Manager: Login_2").Page("HPE Service Manager: Login").WebEdit("Username").Set "tpqlb" @@ hightlight id_;_Browser("HPE Service Manager: Login 2").Page("HPE Service Manager: Login").WebEdit("Username")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("HPE Service Manager: Login_2").Page("HPE Service Manager: Login").WebEdit("Password").SetSecure "5b3af1ee64c50f2c5838f6fdf6378c9f23ef8ee420ce" @@ hightlight id_;_Browser("HPE Service Manager: Login 2").Page("HPE Service Manager: Login").WebEdit("Password")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("HPE Service Manager: Login_2").Page("HPE Service Manager: Login").WebButton("Log In").Click @@ hightlight id_;_Browser("HPE Service Manager: Login 2").Page("HPE Service Manager: Login").WebButton("Log In")_;_script infofile_;_ZIP::ssf15.xml_;_


Browser("HPE Service Manager").Page("HPE Service Manager").WebButton("User Information").Click @@ hightlight id_;_Browser("HPE Service Manager").Page("HPE Service Manager").WebButton("User Information")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("HPE Service Manager").Page("HPE Service Manager").WebButton("Logout").Click @@ hightlight id_;_Browser("HPE Service Manager").Page("HPE Service Manager").WebButton("Logout")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("HPE Service Manager").Dialog("Message from webpage").WinButton("OK").Click

Window("Internet Explorer_2").Close
