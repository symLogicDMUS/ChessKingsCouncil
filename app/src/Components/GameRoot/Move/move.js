import {makeMove} from "./makeMove";
import "../../helpers/resolvePlayerType";

export function move(gameroot, id, start, dest, left, top, src, dispatch) {
    /* function to move a piece on board from start to dest **/
    makeMove(gameroot, id, start, dest, left, top, src, dispatch);
    gameroot.toggleTurn();
    gameroot.updateFen(start, dest);
    gameroot.updateTurnData();
    gameroot.setUnsavedProgress(true);
    if (gameroot.aiColor === gameroot.turn) {
        gameroot.prepareAiMove();
    }
    gameroot.triggerRender();
}