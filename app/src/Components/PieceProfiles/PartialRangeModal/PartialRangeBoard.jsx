import {getPartialRangeBoardComponent} from "./getPartialRangeBoardComponent";
import { useStyles } from "./PartialRangeBoard.jss";

export function PartialRangeBoard({parentDispatch, boardObj, location, src, theme, rangeType, screenCase}) {

    const classes = useStyles();

    return (
        <div className={classes.board}>
            {getPartialRangeBoardComponent(parentDispatch, boardObj, location, src, theme, rangeType, screenCase)}
        </div>
    )
}