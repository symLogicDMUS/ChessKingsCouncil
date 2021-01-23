import React from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {ModalDisplayBoard} from "./ModalDisplayBoard";
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {fontSize0040} from "../../styles/fontSizes.jss";
import {useStyles} from "./DisplayBoardModal.jss"

export function DisplayBoardModal({theme, img, pieceName, rangeType, range, color, close}) {

    const classes = useStyles({theme: theme, fontSize: fontSize0040});

    return (
        <div className={classes.modal}>
            <motion.div drag className={classes.window}>
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
                    pieceName={pieceName}
                    rangeType={rangeType}
                    location="d4"
                    theme={theme}
                />
            </motion.div>
        </div>
    );
}
