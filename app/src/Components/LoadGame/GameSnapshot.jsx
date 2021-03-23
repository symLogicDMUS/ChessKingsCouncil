import React, {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import {Tooltip} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { rankfiles } from "../helpers/rankfiles";
import { binaryBoard } from "../helpers/binaryBoard";
import { GameSnapshotSquare } from "./GameSnapshotSquare";
import {useStyles} from "../Reuseables/Modals/MuiGridItem.jss";
import {GameSnapshotSqrContent} from "./GameSnapshotSqrContent";
import clsx from "clsx";
import "./GameSnapshot.scss";

export function GameSnapshot({
    theme,
    boardObj,
    setChoice,
    showName,
    isSelected,
    name,
}) {
    const classes = useStyles({ theme: theme });

    const [bValue, reRender] = useState(false);
    useEffect(() => {
        function handleResize() {
            reRender(! bValue)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const getBoard = () => {
        const squares = [];
        for (const rf of rankfiles) {
            squares.push(
                <GameSnapshotSquare
                    rf={rf}
                    key={rf}
                    theme={theme}
                    isLightSqr={binaryBoard[rf]}
                >
                    <GameSnapshotSqrContent src={boardObj[rf]} />
                </GameSnapshotSquare>
            );
        }
        return squares;
    };
    const board = useMemo(() => getBoard(), [theme]);

    return (
        <div className={classes.item_choice}>
            <Box
                onClick={() => setChoice(name)}
                className={clsx(classes.item_container, {
                    [classes.item_selected]: isSelected,
                    [classes.item_unselected]: ! isSelected,
                })}
            >
                {!showName ? (
                    <Tooltip
                        title={name}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <motion.div
                            className='board'
                            whileHover={{ scale: 1.1 }}
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            {board}
                        </motion.div>
                    </Tooltip>
                ) : (
                    <motion.div
                        className='board'
                        whileHover={{ scale: 1.1 }}
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        {board}
                    </motion.div>
                )}
            </Box>
            {showName ? (
                <Typography className={classes.item_name}>{name}</Typography>
            ) : null}
        </div>
    );
}