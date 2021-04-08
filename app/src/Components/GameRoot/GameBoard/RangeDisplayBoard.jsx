import React, {memo} from "react";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { useStyles } from "./RangeDisplayBoard.jss";

export const RangeDisplayBoard = memo(({ range, sqrSize, boardPos, theme }) => {
    const classes = useStyles({ sqrSize: sqrSize, boardPos: boardPos });
    return (
        <>
            {range ? (
                <div className={classes.board}>
                    {range.map((rf) => (
                        <RangeDisplaySquare key={rf} rf={rf} theme={theme} />
                    ))}
                </div>
            ) : null}
        </>
    );
});
