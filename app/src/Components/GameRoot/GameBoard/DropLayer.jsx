import {useDrop} from "react-dnd";
import {isLegal} from "../Move/isLegal";
import {move} from "../Move/move";
import {ItemTypes} from "./ItemTypes";
import {getCoords} from "./getCoords";
import {renderPiece} from "./renderPiece.js";
import {useStyles} from "./DropLayer.jss";

/**
 * Sits on top of game boards. updated on drop.
 */
export const DropLayer = ({gameRoot, pieces, dispatch, setRangeDisplay}) => {

    const classes = useStyles();

    const [isOver, drop] = useDrop({
        accept: ItemTypes,
        canDrop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            return isLegal(gameRoot, item, start, dest);
        },
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            move(gameRoot, item.id, start, dest, left, top, pieces[item.id].src, dispatch)
            gameRoot.toggleTurn();
            gameRoot.updateFen(start, dest);
            gameRoot.updateTurnData();
            gameRoot.unsavedProgress = true;
            if (gameRoot.aiColor === gameRoot.turn) {
                gameRoot.prepareAiMove();
            }
            return undefined;
        },
    });

    return (
        <>
            <div ref={drop} className={classes.board}>
                {Object.keys(pieces).map((key) => renderPiece(pieces[key], key, setRangeDisplay))}
            </div>
        </>
    );
};