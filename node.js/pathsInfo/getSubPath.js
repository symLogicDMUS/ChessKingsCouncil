const getStatuses = require("./getStatuses")


function getSubPath(path, i) {
    /*get up to &&  including the index i in path**/
    return path.slice(0, i + 1)
}

module.exports = getSubPath;

if (require.main === module) {
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 1))
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 2))
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 3))
}
