import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {DeleteForever, Storage} from "@material-ui/icons";
import {MuiButton as Button} from "../../Reuseables/Clickables/MuiButton";
import {useStyles as useMoreStyles} from "../../PieceProfiles/Header/LoadDeleteHeader.jss";
import {useStyles as useEvenMoreStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./LoadingAndDeletingPiecesHelp.jss";
import Box from "@material-ui/core/Box";

export function LoadingAndDeletingPiecesHelp(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme});
    const classes3 = useEvenMoreStyles({theme: props.theme});

    return <>
        <Typography className={classes3.text} paragraph>
            <Box className={classes.buttons}>
                <Button
                    theme={props.theme}
                    className={clsx(classes2.button, {
                        [classes.button1]: true,
                    })}
                    startIcon={<Storage className={classes2.icon}/>}
                >
                    Load
                </Button>
                <Button
                    theme={props.theme}
                    className={clsx(classes2.button, {
                        [classes.button2]: true,
                    })}
                    startIcon={<DeleteForever className={classes2.icon}/>}
                >
                    Delete
                </Button>
            </Box>
            On this page you can click the Load button to go to the Create Piece page with that piece and further edit it,
            or the Delete button to delete the piece. Pieces that are deleted will not affect games in progress,
            but no new game can be started with that piece.
        </Typography>
    </>;
}