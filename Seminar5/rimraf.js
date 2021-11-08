const rimraf = require("rimraf");
const mkdirp = require("mkdirp");
const fs = require("fs");
const err1 = new Error("File Error!");
const err2 = new Error("Directory deleting Error!");

function createDirectory() {
    return mkdirp("./test");
}
function createFile() {
    return new Promise((resolve) => {
        fs.writeFile("./test/test.txt", "this is my text", function (err1) {
            if (err1) throw err1;
            console.log("Results Received");
            resolve();
        });
    });

}
function deleteDirectory() {
    return new Promise((resolve) => {
        rimraf("./test", function (err2) {
            if (err2) console.log(err2);
            console.log("Succesfully deleted a directory");
            resolve();
        });
    })
}

function main() {
    createDirectory()
        .then(() => { return createFile(); })
        .then(() => { return deleteDirectory(); });
}
main();