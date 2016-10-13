var path = require('path');
var os = require('os');
module.exports = {
    normalize: function (dir) {
        return dir[0] === '/' ? dir : (dir[0] === '~' ? path.join(os.homedir(), dir.slice(1)) : path.join(process.cwd(), dir));
    }
};