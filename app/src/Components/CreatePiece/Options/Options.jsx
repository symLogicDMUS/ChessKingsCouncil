import React from "react";
import clsx from "clsx";
import { Save } from "./Save";
import { Load } from "./Load";
import { Erase } from "./Erase";
import { Reset } from "./Reset";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import { useStyles } from "./Options.jss";

export function Options({
    load,
    save,
    reset,
    erase,
    theme,
    pieceName,
    whiteImg,
    blackImg,
}) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const isWide = useMediaQuery("(min-width: 960px)")

    return (
        <Box className={clsx(classes2.four_button_group, {
            [classes2.tool_flexbox]: isWide,
        })}>
            {isWide ? (<Typography className={classes2.tool_title}>Options</Typography>) : null}
            <Load theme={theme} load={load} />
            <Save
                save={save}
                theme={theme}
                whiteImg={whiteImg}
                blackImg={blackImg}
                pieceName={pieceName}
            />
            <Reset reset={reset} theme={theme} />
            <Erase erase={erase} theme={theme} />
        </Box>
    );
}
