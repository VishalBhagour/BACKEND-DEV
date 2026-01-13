const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(" Welcome to Home Page ");
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(" About Page ")
    } else if (req.url === "/user") {
        const user = {
            name: "vishal bhagour",
            age: "20",
        };

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            success: true,
            user
        }));
    } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1> Page not found </h1>")
    }

});

server.listen(3000, () => {
    console.log("server is running");
});