import  {step_1sqr90d, step_1sqr45d, step_1sqr0d, step_1sqr315d, 
         step_1sqr270d, step_1sqr225d, step_1sqr180d, step_1sqr135d} from "../helpers/stepFuncs";
import {outOfBounds} from "../sqrCase/oob";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";


export function getCoordPath(x, y, takeStep) {
    /**
    travel a path from location x, y (rankfile) recording the coordinate of each square
    until step out of bounds. direction depends on which step function takeStep is
    */
    [x, y] = takeStep(x, y)
    let coordList = []
    while (! outOfBounds(x, y)) {
        coordList.push([x, y]);
        [x, y] = takeStep(x, y);
    }
    return coordList
}

// module.exports = getCoordPath;


/** for node.js
if (require.main === module) {

    import {xyToRf} from "../coordType/crdCnvrt"
    import {printBoard} from "../printers/printBoard";
    import {mapListXyToRf} from "../coordType/mapListXyToRf";

    // all helpers passed
    let board = sampleBoardDicts['check_example3'];
    var coordList, rfCoordList;

    // test 1, 90 degrees
    coordList = getCoordPath(4, 4, step_1sqr90d);
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 1, 90", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 2, 45 degrees
    coordList = getCoordPath(4, 4, step_1sqr45d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 2, 45", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 3, 0 degrees
    coordList = getCoordPath(4, 4, step_1sqr0d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest3, 0", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 4, 315 degrees
    coordList = getCoordPath(4, 4, step_1sqr315d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 4, 315", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 5, 270 degrees
    coordList = getCoordPath(4, 4, step_1sqr270d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 5, 270", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 6, 225 degrees
    coordList = getCoordPath(4, 4, step_1sqr225d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 6, 225", rfCoordList, ["d4"]);
    console.log('\n')
    
    
    // test 7, 180 degrees
    coordList = getCoordPath(4, 4, step_1sqr180d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\ntest 7, 180", rfCoordList, ["d4"]);
    console.log('\n')


    // test 8, 135 degrees
    coordList = getCoordPath(4, 4, step_1sqr135d)
    rfCoordList = mapListXyToRf(coordList);
    printBoard(board, "\n test 8, 135", rfCoordList, ["d4"]);
    console.log('\n')

}
*/