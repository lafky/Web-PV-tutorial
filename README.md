# Web-PV-tutorial
A tutorial to demonstrate how to make webpages that update with EPICS PVs.  It assumes you're on the Australian Synchrotron office network.  If that's not the case, you won't be able to connect to the websockets server running on ioc99.

Download jquery.js, new_camonitor.js, and new_status.html to whatever directory you want to work in.

There are currently two functions in new_camonitor that interact with the websockets server.

The first, "monitor" reports the pv status as text and its alarm status as text color.

The second, "statusMon", reports the pv alarm status as background color.  See the new_status.html example for more detail
