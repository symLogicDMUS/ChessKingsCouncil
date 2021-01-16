import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {ModalDisplayBoard} from "./ModalDisplayBoard";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {useStyles} from "./DisplayBoardModal.jss"
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function DisplayBoardModal({theme, img, pieceName, rangeType, range, color, close}) {

    const classes = useStyles({theme: theme, fontSize: fontSize});

    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <Box className={classes.top_bar}>
                    <Typography className={classes.title}>
                        {resolvePlayerType(color)} {pieceName} {rangeType}
                    </Typography>
                    <IconButton onClick={close} className={classes.close}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <ModalDisplayBoard
                    img={img}
                    range={range}
                    rangeType={rangeType}
                    location="d4"
                    theme={theme}
                />
            </div>
        </div>
    );
}
