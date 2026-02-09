const fs = require("fs");
const http = require("http")





const readStream = fs.createReadStream("./output/txt", {
    highWaterMark: 64 * 1024
})


readStream.open("data", (chunk) => {
    console.log(chunk);
})