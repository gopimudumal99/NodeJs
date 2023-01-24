const http = require("http");
// const { requestHandler } = require("./routes");
const routes = require("./routes");
const server = http.createServer(routes.handler);

server.listen(3000);
