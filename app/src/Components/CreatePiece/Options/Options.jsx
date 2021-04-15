import React, { useState } from "react";
import clsx from "clsx";
import { Save } from "./Save";
import { Load } from "./Load";
import { Erase } from "./Erase";
import { Reset } from "./Reset";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { Close } from "../../Reuseables/Modals/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import {ClickAwayListener,Portal,Slide,Typography} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
import { useStyles } from "./Options.jss";

export function Options({
    load,
    save,
    reset,
    erase,
    clear,
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
