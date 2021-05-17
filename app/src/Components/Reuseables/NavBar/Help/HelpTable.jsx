import React from "react";
import Box from "@material-ui/core/Box";
import { NavBarAlt } from "../NavBarAlt";
import { Close } from "../../Modals/Close";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiAccordion from "../../Accordions/MuiAccordion";
import TemporaryDrawerButton from "../../Drawers/TemporaryDrawerButton";
import { useStyles } from "./HelpTable.jss";

export function HelpTable({ setHelpItem, onClose, theme }) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.window}>
            <Box className={classes.top}>
                <TemporaryDrawerButton theme={theme}>
                    {" "}
                    <NavBarAlt theme={theme} />
                </TemporaryDrawerButton>
                <Typography variant="button" className={classes.title}>
                    Help
                </Typography>
                <Close onClick={onClose} theme={theme} />
            </Box>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        Creating a Piece
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem("putting created piece into a game")
                        }
                    >
                        Putting the Piece I Created Into a Game
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("naming a piece")}
                    >
                        Naming a Piece and Invalid Names
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem("uploading images for your piece")
                        }
                    >
                        Uploading Images For Your Piece
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem("offsets and spans explained")
                        }
                    >
                        Offsets and Spans Explained
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem(
                                "location of the piece on the board when creating it"
                            )
                        }
                    >
                        Location of the Piece on the Board When Creating it
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("create piece page options")}
                    >
                        Options (Load, Save, Reset, Erase)
                    </ListItem>
                </List>
            </MuiAccordion>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        Customizing a game
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem("subbing your pieces for regular ones")
                        }
                    >
                        Subbing Your Pieces For Regular ones
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem(
                                "make your piece a pawn promotion option"
                            )
                        }
                    >
                        Making Your Piece an Option for Pawns to Promote to
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("piece profiles")}
                    >
                        Piece Profiles
                    </ListItem>
                </List>
            </MuiAccordion>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        Playing a Game
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("range display")}
                    >
                        Range Analysis Board
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("playing the game")}
                    >
                        Playing a Game
                    </ListItem>
                </List>
            </MuiAccordion>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        New Game Page
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("game name")}
                    >
                        Game Name
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("game types")}
                    >
                        Game Types
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("player types")}
                    >
                        Player Types
                    </ListItem>
                </List>
            </MuiAccordion>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        Load Game Page
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("game image grid")}
                    >
                        Game Image Grid
                    </ListItem>
                </List>
            </MuiAccordion>
            <MuiAccordion
                className={classes.accordion}
                heading={
                    <Typography
                        className={classes.accordion_summary_text}
                        noWrap
                    >
                        Saved Pieces Page
                    </Typography>
                }
            >
                <List className={classes.list}>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() => setHelpItem("piece profiles")}
                    >
                        Piece Profiles
                    </ListItem>
                    <ListItem
                        button
                        className={classes.list_item}
                        onClick={() =>
                            setHelpItem("loading and deleting pieces")
                        }
                    >
                        Loading and Deleting Pieces
                    </ListItem>
                </List>
            </MuiAccordion>
        </div>
    );
}
