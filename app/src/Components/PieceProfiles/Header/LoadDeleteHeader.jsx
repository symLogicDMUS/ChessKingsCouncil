import React from "react";
import {MuiButton as Button} from "../../Reuseables/MuiButton";

export function LoadDeleteHeader({ pieceName, load, prepareDelete, classes, }) {
    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <Button
                className={classes.load_button}
                onClick={() => load(pieceName)}
            >
                Load
            </Button>
            <Button
                className={classes.delete_button}
                onClick={() => prepareDelete(pieceName)}
            >
                Delete
            </Button>
        </div>
    );
}
