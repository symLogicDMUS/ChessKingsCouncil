import React, {useState} from "react";
import {DisplayBoard} from "./DisplayBoard";
import {getColorName} from "../../helpers/getColorName";
import {useStyles} from "./DisplayBoardModal.jss"

export function DisplayBoardModal({screenCase, theme, img, pieceName, rangeType, range, color, expand}) {
    let [src, setSrc] = useState(`/Images/close/off/${theme}.svg`);
    const classes = useStyles[screenCase]()
    return (
        <div className={classes.displayBoardModal}>
            <div className={classes.title}>
                {getColorName(color)} {pieceName} {rangeType}
            </div>
            <div
                className={classes.close}
                onClick={() => expand(null, null, null)}
                onMouseEnter={() => setSrc(`/Images/close/on/${theme}.svg`)}
                onMouseLeave={() => setSrc(`/Images/close/off/${theme}.svg`)}
            >
                <img
                    src={src}
                    className={classes.closeIcon}
                    alt="close display board window"
                />
            </div>
            <DisplayBoard
                img={img}
                pieceName={pieceName}
                rangeType={rangeType}
                range={range}
                color={color}
                expand={expand}
                location="d4"
            />
        </div>
    );
}
