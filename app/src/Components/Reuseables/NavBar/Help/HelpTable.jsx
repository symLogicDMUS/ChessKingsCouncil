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

    const listItems = [
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("putting created piece into a game")}
        >
            Putting the Piece I Created Into a Game
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("New Game (all)")}
        >
            New Game Page (all)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("game types")}
        >
            Game Types
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("player types")}
        >
            Player Types
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("Load Game (all)")}
        >
            Load Game Page (all)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("Create Piece (all)")}
        >
            Creating Piece Page (all)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("invalid pieces names")}
        >
            Invalid Piece Names
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("uploading images for your piece")}
        >
            Uploading Images For Your Piece
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("offsets and spans explained")}
        >
            Offsets and Spans Explained
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("location of the piece on the board when creating it")}
        >
            Location of the Piece on the Board When Creating it
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("create piece page options")}
        >
            Create Piece Page Options (Load, Save, Reset, Erase)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("Saved Pieces (all)")}
        >
            Saved Pieces Page (all)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("subbing your pieces for regular ones")}
        >
            Subbing Your Pieces For Regular ones
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("make your piece a pawn promotion option")}
        >
            Making Your Piece an Option for Pawns to Promote to
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("GameRoot (all)")}
        >
            Play Game Page (all)
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("range display")}
        >
            Range Display
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("piece profiles")}
        >
            Piece Profiles
        </ListItem>,
        <ListItem
            theme={theme}
            onClick={() => setHelpItem("Customize (all)")}
        >
            Customize Game Page (all)
        </ListItem>,
    ]
    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <Box className={classes.top}>
                    <Typography variant='h6' className={classes.title}>Help</Typography>
                    <CloseIcon fontSize="inherit" onClick={onClose} style={closeIcon(fontSize002, theme)} />
                </Box>
                <ScrollTable
                    listItems={listItems}
                    numRows={listItems.length}
                    theme={theme}
                    style={listStyle()}
                    rowStyle={rowStyle()}
                    buttonStyle={buttonStyle()}
                />
            </div>
        </div>
    );
}