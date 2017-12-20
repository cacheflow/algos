var fs = require('fs');
var request = require('request');
var path = require('path')

var download = async function (url, dest, cb) {
    var file = fs.createWriteStream(path.resolve(dest));
    var sendReq = await request.get(url).then(r => r).catch(e => e)
    console.log(sendReq)
    // verify response code
    // sendReq.on('response', function(response) {
    //     if (response.statusCode !== 200) {
    //         return cb('Response status was ' + response.statusCode);
    //     }
    // });

    // // check for request errors
    // sendReq.on('error', function (err) {
    //     console.log("failed")
    // });

    // sendReq.pipe(file);

    // file.on('finish', function() {
    //     file.close(cb);  // close() is async, call cb after close completes.
    // });

    // file.on('error', function(err) { // Handle errors
    //     fs.unlink(dest); // Delete the file async. (But we don't check the result)
    //     return cb(err.message);
    // });
};

download('http://hw-videos.worldstarhiphop.com/u/vid/2017/09/iGu2VMz5P9lr.mp4', './test.js', () => console.log("wow"))