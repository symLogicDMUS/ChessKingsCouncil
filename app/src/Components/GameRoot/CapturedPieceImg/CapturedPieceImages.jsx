import React, { useEffect, useReducer } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { isPiece } from "../../helpers/isPiece";
import { getCapturedDict } from "./getCapturedDict";
import { Typography } from "@material-ui/core";
import { reducer } from "./CapturedPieceImages.red";
import { useStyles } from "./CapturedPieceImages.jss";

export function CapturedPieceImages({
    captured,
    capturedIds,
    idDict,
    defs,
    gameType,
    theme,
}) {
    const [state, dispatch] = useReducer(
        reducer,
        getCapturedDict(idDict, defs, capturedIds, gameType, theme)
    );
    const classes = useStyles({ theme: theme });

    useEffect(() => {
        dispatch({
            type: "new-theme",
            idDict: idDict,
            defs: defs,
            capturedIds: capturedIds,
            gameType: gameType,
            theme: theme,
        });
    }, [theme]);

    useEffect(() => {
        if (isPiece(captured)) {
            dispatch({
                type: "new-captured",
                capturedId: captured,
                idDict: idDict,
                defs: defs,
                capturedIds: capturedIds,
                gameType: gameType,
                theme: theme,
            });
        }
    }, [captured]);

    return (
        <div className={classes.captured_piece_images}>
            <Box
                className={clsx(classes.outlined_box, {
                    [classes.white_captured]: true,
                })}
            >
                <Typography className={classes.label}>white</Typography>
                {state.W.length === 0 ? (
                    <Box className={classes.empty_list} />
                ) : (
                    <Box className={classes.piece_list}>
                        {state.W.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                className={classes.piece}
                                alt="captured piece"
                            />
                        ))}
                    </Box>
                )}
            </Box>
            <Box
                className={clsx(classes.outlined_box, {
                    [classes.black_captured]: true,
                })}
            >
                <Typography className={classes.label}>black</Typography>
                {state.B.length === 0 ? (
                    <Box className={classes.empty_list} />
                ) : (
                    <Box className={classes.piece_list}>
                        {state.B.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                className={classes.piece}
                                alt="captured piece"
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </div>
    );
}
