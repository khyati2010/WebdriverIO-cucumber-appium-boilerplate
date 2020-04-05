const mkdirp = require('mkdirp');
const fs = require('fs');

function writeFile(path, data=" "){
    let _dir = path.substr(0,path.lastIndexOf('/'));
    //checking if path exist
    if(!fs.existsSync(_dir)){
        //creating path
        mkdirp(_dir, function (err) {
            if (err) console.error(err)
            else {
                console.log(_dir,' path created..!');
            }
        });
    }else{
        fs.writeFileSync(path, data, "utf8");
    }

}

function appendFile(path, data, callback){
    fs.appendFile(path, data, (err) => {
        callback(err);
    });
}

function deleteFile(path){
    return fs.unlinkSync(path)
}

function readFile(path){
    return fs.readFileSync(path);
}

module.exports = {
    writeFile: writeFile,
    readFile: readFile,
    appendFile : appendFile,
    deleteFile : deleteFile
};