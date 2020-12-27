import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from '@material-ui/icons/Storage';
import DeleteForever from "@material-ui/icons/DeleteForever";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import {fontSize} from "../../styles/fontSize.jss";
import {button, useStyles} from "./LoadDeleteHeader.jss";


export function LoadDeleteHeader({ pieceName, load, prepareDelete, theme, style}) {
    const classes = useStyles({theme: theme, style: style, fontSize: fontSize});
    return (
        <div className={classes.header}>
            <Typography className={classes.piece_name}>{pieceName}</Typography>
            <Box className={classes.buttons_flexbox}>
                <Button
                    theme={theme}
                    startIcon={<StorageIcon />}
                    style={{...button(fontSize, theme), marginRight: '0.5em'}}
                    onClick={() => load(pieceName)}
                >
                    Load
                </Button>
                <Button
                    theme={theme}
                    startIcon={<DeleteForever />}
                    style={{...button(fontSize, theme), marginLeft: '0.5em'}}
                    onClick={() => prepareDelete(pieceName)}
                >
                    Delete
                </Button>
            </Box>
        </div>
    );
}