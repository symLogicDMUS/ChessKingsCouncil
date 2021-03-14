import React, {useEffect, useReducer} from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import {getCapturedDict} from "./getCapturedDict";
import {reducer} from "./CapturedPieceImages.red";
import {useStyles, whiteList} from "./CapturedPieceImages.jss";
import {isPiece} from "../../helpers/isPiece";

export function CapturedPieceImages({captured, capturedIds, idDict, defs, gameType, theme}) {
    const [state, dispatch] = useReducer(reducer, getCapturedDict(idDict, defs, capturedIds, gameType, theme))

    const classes = useStyles({theme});

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
        <div className={classes.captured_piece_images}>
            <Box className={classes.outlined_box} style={whiteList()}>
                <Typography className={classes.label}>white</Typography>
                {state.W.length === 0 ? (
                    <Box className={classes.empty_list}/>
                ) : (
                    <Box className={classes.piece_list}>
                        {state.W.map((src, index) => <img key={index} src={src} className={classes.piece} alt='captured piece'/>)}
                    </Box>
                )}
            </Box>
            <Box className={classes.outlined_box}>
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
    )
}