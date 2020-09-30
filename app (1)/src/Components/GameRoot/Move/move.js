import {makeMove} from "./makeMove";
import "../../helpers/getColorName";

export function move(gameroot, start, dest) {
    /* function to move a piece on board from start to dest **/
    makeMove(gameroot, start, dest);
    gameroot.toggleTurn();
    gameroot.updateFen(start, dest);
    gameroot.updateTurnData();
    gameroot.setUnsavedProgress(true);
    gameroot.update();
    if (gameroot.aiColor === gameroot.turn) {
        gameroot.prepareAiMove();
    }
    return
}