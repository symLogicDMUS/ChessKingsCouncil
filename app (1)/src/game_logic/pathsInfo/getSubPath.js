import {getStatuses} from "./getStatuses"


export function getSubPath(path, i) {
    /*get up to &&  including the index i in path**/
    return path.slice(0, i + 1)
}

// module.exports = getSubPath;

/** for node.js
if (require.main === module) {
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 1))
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 2))
    console.log(getSubPath(['#', 'WP1', 'WP2', 'BB1'], 3))

}
*/
