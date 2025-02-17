// import { a } from "./public/a.js";
// import { b } from "./public/b.js";
// import { c } from "./public/c.js";
// import { d } from "./public/d.js";

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    let url = req.url;
    if (req.method === "GET") {
        if (req.url === "/") {
            let main = fs.readFileSync("index.html");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(main);
        }
    }
});

server.listen(3000, () => {
    console.log("3000서버 실행 http://localhost:3000");
});
