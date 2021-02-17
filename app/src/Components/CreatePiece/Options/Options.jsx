import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {Save} from "./Save";
import {Load} from "./Load";
import {Erase} from "./Erase";
import {Reset} from "./Reset";
import {useStyles} from "./Options.jss";

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

    return (
        <>
            <div className={classes.options_tool}>
                <Box className={classes.options_flexbox}>
                    <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
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
                    <Reset reset={reset} theme={theme} />
                    <Erase erase={erase} theme={theme} />
                </Box>
            </div>
        </>
    );
}
