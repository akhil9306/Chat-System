# Chat-System
This is a chat system where multiple user can join and chat.

# Server
The server is created using node js  and the connection between the server and the client is done using socket.io . We can install node js from the official website : https://nodejs.org/en/download/

1. Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file. Or, browse to the location where you have saved the file and double-click it to launch.
2. The system will ask if you want to run the software – click Run.
3. You will be welcomed to the Node.js Setup Wizard – click Next.
4. On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.
5. The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.
6. The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.
7. Finally, click the Install button to run the installer. When it finishes, click Finish.

Once installing is done we can check the version using on the treminal
 ``` npm -v ```
 
To install socket.io we can use on the terminal
``` npm install socket.io ```

We also install additional library which is nodemon so that the server can restart automatically in cases we make any changes to the server code.

To install nodemon on the terminal we use 
``` npm install -g nodemon ```

and to run it we use 
 ``` node index.js ```
 
 # Client
 The client has basic html, css and javascript interface which can be fetched from the server. This contains the chat applications.
 
 The html contains icons taken from https://fontawesome.com/ .
