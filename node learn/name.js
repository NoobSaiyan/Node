
var fs=require('fs');
var path= require('path');

fs.readdir(process.argv[2], function(err, data) {
    for(var x = 0; x < data.length; x++) {
        if(path.extname(data[x]) == "." + process.argv[3]) {
            console.log(data[x]);
        }
    }
});