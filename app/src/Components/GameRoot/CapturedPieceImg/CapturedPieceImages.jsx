import React, {useEffect, useReducer} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {isPiece} from "../../helpers/isPiece";
import {getCapturedDict} from "./getCapturedDict";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {ClickAwayListener, Portal, Typography} from "@material-ui/core";
import { useStyles as useMoreStyles } from "../GameRoot.jss";
import {reducer} from "./CapturedPieceImages.red";
import {useStyles} from "./CapturedPieceImages.jss";

export function CapturedPieceImages({captured, capturedIds, idDict, defs, toggleMiniVariantTool, gameType, theme}) {
    const [state, dispatch] = useReducer(reducer, getCapturedDict(idDict, defs, capturedIds, gameType, theme))
    const classes = useStyles({theme: theme});
    const classes2 = useMoreStyles({theme: theme})

    const handleClickAway = () => {
        toggleMiniVariantTool("Captured-Pieces")
    };

    useEffect(() => {
        dispatch({type: 'new-theme',
            idDict: idDict,
            defs: defs,
            capturedIds: capturedIds,
            gameType: gameType,
            theme: theme
        })
    }, [theme])

    useEffect(() => {
        if (isPiece(captured)) {
            dispatch({type: 'new-captured',
                capturedId: captured,
                idDict: idDict,
                defs: defs,
                capturedIds: capturedIds,
                gameType: gameType,
                theme: theme
            })
        }
    }, [captured])

    return (
        <>
            <MediaQuery maxWidth={960}>
                <Portal>
                    <div className={classes2.modal}>
                        <ClickAwayListener
                            onClickAway={handleClickAway}
                            mouseEvent="onMouseDown"
                            touchEvent="onTouchStart"
                        >
                            <motion.div drag className={classes.captured_piece_images_modal}>
                                <Box className={classes.top_area}>
                                    <DragIndicatorIcon className={classes.drag_icon} />
                                    <Typography variant="caption" className={classes.caption}>
                                        Captured Pieces
                                    </Typography>
                                </Box>
                                <Box className={classes.piece_list_area}>
                                    <Box className={clsx(classes.outlined_box, {
                                        [classes.white_captured]: true,
                                    })}>
                                        <Typography className={classes.label}>white</Typography>
                                        <Box className={clsx(classes.piece_list, {
                                            [classes.empty_list]: state.W.length === 0,
                                        })}>
                                            {state.W.map((src, index) => <img key={index} src={src} className={classes.piece} alt='captured piece'/>)}
                                        </Box>
                                    </Box>
                                    <Box className={clsx(classes.outlined_box, {
                                        [classes.black_captured]: true,
                                    })}>
                                        <Typography className={classes.label}>black</Typography>
                                        <Box className={clsx(classes.piece_list, {
                                            [classes.empty_list]: state.B.length === 0,
                                        })}>
                                            {state.B.map((src, index) => <img key={index} src={src} className={classes.piece} alt='captured piece'/>)}
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                        </ClickAwayListener>
                    </div>
                </Portal>
            </MediaQuery>
            <MediaQuery minWidth={960}>
                <div className={classes.captured_piece_images}>
                    <Box className={clsx(classes.outlined_box, {
                        [classes.white_captured]: true,
                    })}>
                        <Typography className={classes.label}>white</Typography>
                        {state.W.length === 0 ? (
                            <Box className={classes.empty_list}/>
                        ) : (
                            <Box className={classes.piece_list}>
                                {state.W.map((src, index) => <img key={index} src={src} className={classes.piece} alt='captured piece'/>)}
                            </Box>
                        )}
                    </Box>
                    <Box className={clsx(classes.outlined_box, {
                        [classes.black_captured]: true,
                    })}>
                        <Typography className={classes.label}>black</Typography>
                        {state.B.length === 0 ? (
                            <Box className={classes.empty_list}/>
                        ) : (
                            <Box className={classes.piece_list}>
                                {state.B.map((src, index) => <img key={index} src={src} className={classes.piece} alt='captured piece'/>)}
                            </Box>
                        )}
                    </Box>
                </div>
            </MediaQuery>
        </>
    )
}