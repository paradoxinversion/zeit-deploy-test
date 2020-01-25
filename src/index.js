var http = require("http");

// Note that we pass in the http object
const io = require("socket.io")(http);

// Here is whhere we actually listen for new connections
io.on("connection", function(socket) {
  console.log("a user connected", socket);
});
//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World! Hoping for a successful test!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
