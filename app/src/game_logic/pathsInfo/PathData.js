export class PathData {
    /*description of class**/

    constructor(direction) {
        /*information about a path stemming from a specific square**/
        this.direction = direction
        this.path = []
        this.coordPath = []
        this.pieces = []
        this.statuses = []
        this.pieceMatchesPath = []
    }

    hardcode(path, coordPath, pieces, statuses, pieceMatchesPath) {
        /*used for unit testing to set the lists to hard coded values**/
        this.path = path
        this.coordPath = coordPath
        this.pieces = pieces
        this.statuses = statuses
        this.pieceMatchesPath = pieceMatchesPath
    }

}

// module.exports = PathData;
