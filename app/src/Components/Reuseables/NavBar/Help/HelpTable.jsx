import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {ListItem} from "../../ScrollTable/ListItem";
import ScrollTable from "../../ScrollTable/ScrollTable";
import {fontSize002} from "../../../styles/fontSizes.jss";
import {buttonStyle, closeIcon, listStyle, rowStyle, useStyles} from "./HelpTable.jss";

export function HelpTable({setHelpItem, onClose, theme}) {
    const classes = useStyles({theme: theme});

    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <Box className={classes.top}>
                    <Typography variant='h6' className={classes.title}>Help</Typography>
                    <CloseIcon fontSize="inherit" onClick={onClose} style={closeIcon(fontSize002, theme)} />
                </Box>
                <ScrollTable
                    listItems={[
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("New Game (all)")}
                        >
                            New Game Page (all)
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("Load Game (all)")}
                        >
                            Loading Game Page (all)
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("Create Piece (all)")}
                        >
                            Creating Piece Page (all)
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("Saved Pieces (all)")}
                        >
                            Saved Pieces Page (all)
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("GameRoot (all)")}
                        >
                            Play Game Page (all)
                        </ListItem>,
                        <ListItem
                            theme={theme}
                            onClick={() => setHelpItem("Customize (all)")}
                        >
                            Customize Game Page (all)
                        </ListItem>,
                    ]}
                    numRows={6}
                    theme={theme}
                    style={listStyle()}
                    rowStyle={rowStyle()}
                    buttonStyle={buttonStyle()}
                />
            </div>
        </div>
    );
}