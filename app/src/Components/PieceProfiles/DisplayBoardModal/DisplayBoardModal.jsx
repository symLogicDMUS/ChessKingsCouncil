import React from "react";
import {ModalDisplayBoard} from "./ModalDisplayBoard";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss"
import {useStyles} from "./DisplayBoardModal.jss"

export function DisplayBoardModal({theme, img, pieceName, rangeType, range, color, expand}) {

    const classes = useStyles({fontSize})

    return (
        <div className={classes.displayBoardModal}>
            <div className={classes.title}>
                {resolvePlayerType(color)} {pieceName} {rangeType}
            </div>

            <ModalDisplayBoard
                img={img}
                rangeType={rangeType}
                theme={theme}
                range={range}
                location="d4"
            />
        </div>
    );
}
