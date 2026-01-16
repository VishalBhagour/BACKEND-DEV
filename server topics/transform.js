const fs = require("fs")
const { Transform } = require("stream")

const upper = new Transform({
    transform(chunk, encouding, cb) {
        const modifiedData = chunk.toString().toUpperCase();
        cb(null, modifiedData)
    }
})
const removevowel = new Transform({
    transform(chunk, encouding, cb) {
        const modifiedData = chunk.toString().replace(/[AEIOU]/g, "*");
        cb(null, modifiedData)
    }
})

const readStream = fs.createReadStream("./info.txt")
const writeStream = fs.createWriteStream("./output.txt")

readStream
    .pipe(upper)
    .pipe(writeStream)