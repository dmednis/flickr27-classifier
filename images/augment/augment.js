var fs = require('fs');
var sharp = require('sharp');
var path = require('path');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

function getFiles(path) {
    return fs.readdirSync(path);
}

var basePath = '../logos/';

getDirectories(basePath).forEach(function (dir) {
    getFiles(basePath + dir).forEach(function (file) {
        console.log(basePath + dir + "/" + file);
        if (file.match(/^[0-9]*.jpg$/)) {
            sharp(basePath + dir + "/" + file)
                .flip()
                .toFile(basePath + dir + "/flip-" + file, function (err) {
                    if (!err) console.log(basePath + dir + "/flip-" + file);
                    if (err) console.error(err)
                });
            sharp(basePath + dir + "/" + file)
                .flop()
                .toFile(basePath + dir + "/flop-" + file, function (err) {
                    if (!err) console.log(basePath + dir + "/flop-" + file);
                    if (err) console.error(err)
                });
            sharp(basePath + dir + "/" + file)
                .rotate(90)
                .toFile(basePath + dir + "/rotate-" + file, function (err) {
                    if (!err) console.log(basePath + dir + "/rotate-" + file);
                    if (err) console.error(err)
                });
            sharp(basePath + dir + "/" + file)
                .blur(7)
                .toFile(basePath + dir + "/blur-" + file, function (err) {
                    if (!err) console.log(basePath + dir + "/blur-" + file);
                    if (err) console.error(err)
                });
            sharp(basePath + dir + "/" + file)
                .grayscale()
                .toFile(basePath + dir + "/bw-" + file, function (err) {
                    if (!err) console.log(basePath + dir + "/bw-" + file);
                    if (err) console.error(err)
                });
        }
    })
});




