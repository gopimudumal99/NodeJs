# NodeJs

- Javascript runtime environment
- built on Js
- it allows to run js code on server
- basically it allows the js not just in browser but anywhere else like normal programing
- it allows to run js out of the browser
- node js uses V8 is js engine build by google that allowed the js run in browser
- node js ->uses -> chrome V8 engine -> compiles the js -> machine code || v8 self written in C++

`node -v ` => node version check
`node` => write simple node code

#### Core modules

`const fs = require('fs')` => file system core module for node
`fs.writeFileSync('hello.tsx','Hello world')` => create file first args file name and second args is content of file

**_./ => relative path && / => absolute path_**

- fs
- https => launch SSL server
- http => launch server, sender requests
- path
- os

# Javascript on server

- Node.js is a javascript runtime
- you can use it more than just server-side code
- utility scripts, Build tools

## Node.js Role (in web development)

- Run Server [create a server and listen to incoming Requests]
- to run over BUSINESS LOGIC [Handle request, validate input, Connect to database]
- Response [return response (render HTML,Json..)]

## THE REPEL

- Read => read the user input
- Eval => Evaluate the user input
- Print => Print output(Result)
- Loop => wait for new Input

### Running Node.js Code

1. Execute Files

- used for real apps
- predictable sequence of steps

2. Use the REPL

- great playground
- Execute code as you write it

### How web works?

User/Client (Browser) ----> url enter (http://my-page.com) -->domain lookup

- image add please here!

### HTTP HTTPS

1. Hyper text transfer protocol

- A protocol transferring Data which is understood by Browser and Server

2. Hyper text transfer protocol secure

- HTTP + Data encryption (during transmission)

#### server in Node using http

1. requestListener function

- is a function that will execute for every incoming request

```node
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```

## Node.js program LifeCycle

- add image here?
  node app.js => start script => parse code, register variables & Functions => Event Loop => to stop forcefully - process.exit

## code

- understanding request
- sending response
- Routing Requests
- GET =>
- POST =>

```node
// sending response
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My first page</title> </head>");
  res.write("<body> <h1>Hello i am from node server</h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
```

```node
//Routing Requests
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.headers, req.method);
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>Enter message</title> </head>");
    res.write(
      "<body> <form action='/message' method='POST'> <input name='message' type='text'/> <button type='submit'>Send</button> </form> </body>"
    );
    res.write("</html>");
    return res.end(); // quit here
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My first page</title> </head>");
  res.write("<body> <h1>Hello i am from node server</h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
```

### Streams & Buffers

```
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.headers, req.method);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title>Enter message</title> </head>");
    res.write(
      "<body> <form action='/message' method='POST'> <input name='message' type='text'/> <button type='submit'>Send</button> </form> </body>"
    );
    res.write("</html>");
    return res.end(); // quit here
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      // this on method allows to listen some events

      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My first page</title> </head>");
  res.write("<body> <h1>Hello i am from node server</h1> </body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
```

## Event Driven

please go throw this article
(https://www.geeksforgeeks.org/explain-event-driven-programming-in-node-js/)

## Single thread, Event loop and Blocking Code

! please add a image here
! add here event loop picture

<your code>
