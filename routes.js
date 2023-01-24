const fs = require("fs");

const requestHandler = (req, res) => {
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

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      //   fs.writeFileSync("message.txt", message);  //! this is synchronous this block the next line of code

      /* non blocking code  */
      fs.writeFile("message.txt", message, (err) => {
        //! asynchronous third args is function as err if no err this will be null
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My first page</title> </head>");
  res.write("<body> <h1>Hello i am from node server</h1> </body>");
  res.write("</html>");
  res.end();
};

// module.exports = { handler: requestHandler, someText: "Some hard code text" };
exports.handler = requestHandler;
exports.someText = "Some hard code text";
