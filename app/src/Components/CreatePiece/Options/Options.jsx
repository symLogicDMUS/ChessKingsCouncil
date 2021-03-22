import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import {useMediaQuery} from "react-responsive";
import { Save } from "./Save";
import { Load } from "./Load";
import { Erase } from "./Erase";
import { Reset } from "./Reset";
import {useStyles as useMoreStyles}
        from "../CreatePiece.jss";
import { useStyles } from "./Options.jss";
import {LocationButton} from "../Location/LocationButton";

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
    const isDesktop = useMediaQuery({query: '(min-width: 1040px)'})

    return (
        <Box className={clsx(classes2.four_button_group, {
            [classes2.tool_flexbox]: isDesktop,
        })}>
            {isDesktop ? (<Typography className={classes2.tool_title}>Options</Typography>) : null}
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
