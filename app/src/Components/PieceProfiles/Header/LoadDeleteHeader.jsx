import React from "react";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import {getButtonSize} from "../../styles/button/button-size";

export function LoadDeleteHeader({ pieceName, load, prepareDelete, classes, }) {
    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <Button
                className={classes.load_button}
                style={getButtonSize(window.screen.availHeight * 0.03)}
                onClick={() => load(pieceName)}
            >
                Load
            </Button>
            <Button
                className={classes.delete_button}
                style={getButtonSize(window.screen.availHeight * 0.03)}
                onClick={() => prepareDelete(pieceName)}
            >
                Delete
            </Button>
        </div>
    );
}
