# Building a basic web application using Node.js

### What is node and npm : [Blog](https://medium.com/javascript-in-plain-english/what-is-node-js-5fe50e4332c8)
- Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- Npm is the package mangaer for node.js you can install any package on your machine from the repository.
- npx is node package execute, you can execute 

### package.json
- All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. 
- This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. 
- It can also contain other metadata such as a project description, the version of the project, even configuration data - all of which can be vital to both npm and to the end users of the package.
- The ```package.json``` file is normally located at the root directory of a Node.js project.

### Building a simple simple express application

1. Initialize a node application
```bash
    npm init
```
 - You will find a menu Most of these details are pretty obvious, and for many of the prompts you can just select the defaults. 
 
 - Entry point is the javascript file that will be invoked when consumers of your module “require” it, this file will include the main logic for your module.
 
 - After filling in the required information, a ```package.json``` file will be created with all the entered details 
 - Read about content inside package.json in detail in this blog: [Blog](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)

2. Install required dependencies
```
    npm install express --save
```
- This shall create a directory ```node_modules``` in your working directory.

3. Create a file ```app.js``` or name it as your entry point.

4. Start the server
```javascript
//Requiring the express module that you installed
const express= require('express');
const app=express();

//Starting the server at PORT 3000
app.listen(3000, function(){
    console.log("Server Has Started");
});
```
### What are "Ports"?
- At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. 
- A port is identified for each transport protocol and address combination by a 16-bit unsigned number, known as the port number.

### HTTP Request methods GET, POST, PUT, DELETE
- You can read them about in depth [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

#### GET Request
- Used to retrieve information
- Data is sent via query string
- Info is plainly visible in the URL
- Limited amount of data can be sent

#### POST Request
- Used to post data to the server
- Used to write/create/ update
- data is sent via **request body** not by query string
- Send any type of data

#### PUT and PATCH Request
- These two requests are used to update a resource on a server.
- Data is sent via **request body** 
- The main difference between the `PUT` and `PATCH` method is that the `PUT` method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the `PATCH` method supplies a set of instructions to modify the resource.

#### DELETE Request
- This request is used to delete a resource from a server.

#### CRUD Operations
Stand for create read, update and destroy. 

5. Create a 'root' route

```javascript
//Requiring the express module that you installed
const express= require('express');
const app=express();

//Creating making app to make a get request at route '/' (i.e localhost:xxxx/), function takes two arguments request (req) and response (res), we are returning a response saying hello world.

app.get("/", (req, res)=>{
    res.send("Hello World");
});

//Starting the server at PORT 3000
app.listen(3000, function(){
    console.log("Server Has Started");
});
```