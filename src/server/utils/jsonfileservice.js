module.exports = function() {
    var fs = require('fs');
    var service = {
        getJsonFromFile: getJsonFromFile,
        write: write
    };
    return service;

    function getJsonFromFile(file) {

        var json = getConfig(file);
        return json;

        function readJsonFileSync(filepath, encoding) {
            if (typeof (encoding) === 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return JSON.parse(file);
        }

        function getConfig(file) {
            var filepath = __dirname + file;
            return readJsonFileSync(filepath);
        }
    }

    function write(outputFilename, data) {
       /* fs.writeFile(outputFilename, JSON.stringify(data, null, 4), function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        });*/
    }
};
