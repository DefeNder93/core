var fs = require("fs");

function read(f) {
    return fs.readFileSync(f).toString();
}

var Utils = {
    include: function(f) {
        eval.apply(global, [read(f)]);
    }
};
module.exports = Utils;