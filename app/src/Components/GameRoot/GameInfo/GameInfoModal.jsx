import React from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import {StyledTableRow} from "./StyledTableRow";
import {StyledTableCell} from "./StyledTableCell";
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import {resolvePlayerType} from "../../helpers/resolvePlayerType";
import {useStyles as useMoreStyles} from "../GameRootToolbar.jss";
import {textAlign, useStyles} from "./GameInfoModal.jss";

function GameInfoModal({ theme, gameName, gameType, playerType }) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles({ theme });

    const variants = {
        initial: {
            scale: 0,
            top: 96,
            y: 25,
            left: "calc(50vw + 4px)",
        },
        animate: {
            scale: 1,
            top: 48,
            y: 0,
            left: 0,
        },
        exit: {
            scale: 0,
            top: 96,
            y: 25,
            left: "calc(50vw + 4px)",
        },
    };


    return (
        <motion.div
            className={
                clsx(classes2.window, {
                    [classes.window]: true,
                })
            }
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{ duration: 0.7 }}
            drag
        >
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <StyledTableRow theme={theme}>
                            <StyledTableCell theme={theme} align={textAlign}>Game Name</StyledTableCell>
                            <StyledTableCell theme={theme} align={textAlign}>Game Type</StyledTableCell>
                            <StyledTableCell theme={theme} align={textAlign}>Player Type</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow theme={theme}>
                            <StyledTableCell theme={theme} align={textAlign}>{gameName}</StyledTableCell>
                            <StyledTableCell theme={theme} align={textAlign}>{gameType}</StyledTableCell>
                            <StyledTableCell theme={theme} align={textAlign}>{resolvePlayerType(playerType)}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </motion.div>
    );
}

export default GameInfoModal;
