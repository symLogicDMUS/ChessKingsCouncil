import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StorageIcon from '@material-ui/icons/Storage';
import DeleteForever from "@material-ui/icons/DeleteForever";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import {fontSize} from "../../styles/fontSize.jss";
import {button, useStyles} from "./LoadDeleteHeader.jss";


export function LoadDeleteHeader({ pieceName, load, prepareDelete, theme, style, screenCase}) {
    const classes = useStyles({theme: theme, style: style, fontSize: fontSize});

    const getButtonMargin = () => {
        switch (screenCase) {
            case 'desktop': return '0.5em';
            case 'mobile': return '0.75em';
        }
    };

    return (
        <div className={classes.header}>
            <Typography className={classes.piece_name}>{pieceName}</Typography>
            <Box className={classes.buttons_flexbox}>
                <Button
                    theme={theme}
                    startIcon={<StorageIcon />}
                    style={{...button(fontSize, theme, screenCase), marginRight: getButtonMargin}}
                    onClick={() => load(pieceName)}
                >
                    Load
                </Button>
                <Button
                    theme={theme}
                    startIcon={<DeleteForever />}
                    style={{...button(fontSize, theme, screenCase), marginLeft: getButtonMargin()}}
                    onClick={() => prepareDelete(pieceName)}
                >
                    Delete
                </Button>
            </Box>
        </div>
    );
}