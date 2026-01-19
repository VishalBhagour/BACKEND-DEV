const http = require("http");
const queryString = require("querystring");

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/login" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk.toString();
        });

        req.on("end", () => {
            console.log("Raw form data:", data);

            const parsedData = queryString.parse(data);
            console.log("Parsed object:", parsedData);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Login data received successfully",
                    user: parsedData
                })
            );
        });

        return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});