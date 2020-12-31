import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import MediaQuery from "react-responsive/src";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {ConfirmModal} from "../../Reuseables/ConfirmModal";
import {Save} from "./Save";
import {Load} from "./Load";
import {Erase} from "./Erase";
import {Reset} from "./Reset";
import {Option} from "./Option";
import {useStyles} from "./Options.jss";
import {fontSize} from "../../styles/fontSize.jss";
import {pieceDefs} from "../../../game_logic/testObjects/standardPieceDefs";

export function Options({
    load,
    save,
    reset,
    erase,
    whiteImg,
    blackImg,
    pieceName,
    theme,
}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });

    return (
        <>
            <div className={classes.options_tool}>
                <Box className={classes.options_flexbox}>
                    <MediaQuery minDeviceWidth={768}>
                        <Typography className={classes.title}>
                            Options
                        </Typography>
                    </MediaQuery>
                    <Load theme={theme} load={load} />
                    <Save
                        save={save}
                        whiteImg={whiteImg}
                        blackImg={blackImg}
                        pieceName={pieceName}
                        theme={theme}
                    />
                    <Reset theme={theme} reset={reset} />
                    <Erase theme={theme} erase={erase} />
                </Box>
            </div>
        </>
    );
}
