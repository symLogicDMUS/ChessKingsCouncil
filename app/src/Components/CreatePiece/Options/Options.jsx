import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./Options.jss";

const Save = React.lazy(() => import('./Save'));
const Load = React.lazy(() => import('./Load'));
const Erase = React.lazy(() => import('./Erase'));
const Reset = React.lazy(() => import('./Reset'));


function Options({
    load,
    save,
    reset,
    erase,
    theme,
    pieceName,
    whiteImg,
    blackImg,
    justSaved,
}) {
    const classes2 = useMoreStyles({ theme: theme });
    const isWide = useMediaQuery("(min-width: 960px)");

    return (
        <>
            <Box
                className={clsx(classes2.four_button_group, {
                    [classes2.tool_flexbox]: isWide,
                })}
            >
                <Typography className={classes2.tool_title}>
                    Options
                </Typography>
                <Load
                    load={load}
                    erase={erase}
                    theme={theme}
                    buttonType='option'
                />
                <Save
                    save={save}
                    theme={theme}
                    whiteImg={whiteImg}
                    blackImg={blackImg}
                    pieceName={pieceName}
                    justSaved={justSaved}
                    buttonType='option'
                />
                <Reset
                    reset={reset}
                    theme={theme}
                    buttonType='option'
                />
                <Erase
                    erase={erase}
                    theme={theme}
                    buttonType='option'
                />
            </Box>
        </>
    );
}

export default Options;
