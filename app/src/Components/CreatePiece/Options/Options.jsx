import React, {useState} from "react";
import clsx from "clsx";
import { Save } from "./Save";
import { Load } from "./Load";
import { Erase } from "./Erase";
import { Reset } from "./Reset";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import { Close } from "../../Reuseables/Modals/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {ClickAwayListener, Portal, Slide, Typography} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../CreatePiece.jss";
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
    miniVariantTool,
    toggleMiniVariantTool,
}) {
    const [drag, setDrag] = useState(false);
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme: theme });
    const isWide = useMediaQuery("(min-width: 960px)");

    const handleClickAway = () => {
        toggleMiniVariantTool("Options");
    };

    return (
        <>
            {isWide ? (
                <Box
                    className={clsx(classes2.four_button_group, {
                        [classes2.tool_flexbox]: isWide,
                    })}
                >
                    <Typography className={classes2.tool_title}>
                        Options
                    </Typography>
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
            ) : (
                <Portal>
                    <div className={classes2.modal}>
                        <ClickAwayListener
                            onClickAway={handleClickAway}
                            mouseEvent="onMouseDown"
                            touchEvent="onTouchStart"
                        >
                            <Slide in={true} direction='left' mountOnEnter unmountOnExit onEnter={() => setDrag(true)}>
                                <motion.div drag={drag} className={classes.options_window}>
                                    <Box className={classes2.close_area}>
                                        <DragIndicatorIcon className={
                                            clsx(classes2.icon, {
                                                [classes.draggable_icon] : true,
                                            })}
                                        />
                                        <Close
                                            onClick={handleClickAway}
                                            className={classes2.close}
                                            iconClassName={classes2.icon}
                                            theme={theme}
                                        />
                                    </Box>
                                    <Box className={classes.options_area}>
                                        <Load
                                            theme={theme}
                                            load={load}
                                            className={classes.smOption}
                                        />
                                        <Save
                                            save={save}
                                            theme={theme}
                                            whiteImg={whiteImg}
                                            blackImg={blackImg}
                                            pieceName={pieceName}
                                            className={classes.smOption}
                                        />
                                        <Reset
                                            reset={reset}
                                            theme={theme}
                                            className={classes.smOption}
                                        />
                                        <Erase
                                            erase={erase}
                                            theme={theme}
                                            className={classes.smOption}
                                        />
                                    </Box>
                                </motion.div>
                            </Slide>
                        </ClickAwayListener>
                    </div>
                </Portal>
            )}
        </>
    );
}
