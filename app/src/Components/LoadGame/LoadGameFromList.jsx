import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { fontSize } from "../styles/fontSize.jss";
import MediaQuery from "react-responsive/src";
import { Dropdown } from "../Reuseables/Dropdown";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import { MuiButton as Button } from "../Reuseables/MuiButton";
import { MuiDeleteButton as DeleteButton } from "../Reuseables/MuiDeleteButton";
import { HelpText, HelpTitle } from "./HelpText";
import { button, dropdown, useStyles } from "./LoadGameFromList.jss";

export function LoadGameFromList(props) {
    const classes = useStyles({ theme: props.theme, fontSize: fontSize });
    const content = (
        <Box className={classes.flexbox}>
            <Box className={classes.content}>
                <Typography className={classes.title} noWrap={true}>
                    Load Game
                </Typography>
                <Dropdown
                    style={dropdown(fontSize)}
                    overwrite={null}
                    list={props.gameList}
                    theme={props.theme}
                    updateParent={props.changeName}
                    variant="outlined"
                    labelId="pick-name-label"
                    inputId="pick-name-input"
                    selectId="pick-name-select"
                    label="Pick name..."
                    inputLabel="Pick name..."
                />
                <Box className={classes.buttons}>
                    <Button
                        onClick={() => props.load()}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                        variant={"contained"}
                        theme={props.theme}
                    >
                        Play
                    </Button>
                    <DeleteButton
                        onAcceptDelete={props.deleteGame}
                        modalTitle={`You are asking to delete game ${props.selectedGame}.`}
                        modalText={`This action cannot be undone. Are you sure you want to delete ${props.selectedGame}?`}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                        variant={"contained"}
                        theme={props.theme}
                    />
                </Box>
            </Box>
        </Box>
    );

    return (
        <>
            <MediaQuery minWidth={768}>
                <NavBar
                    currentPage="LoadGame"
                    theme={props.theme}
                    style={{
                        fontSize: fontSize,
                        width: "100%",
                        height: "2.25em",
                    }}
                    buttonStyle={{
                        fontSize: fontSize,
                        height: "2.25em",
                        justifyContent: "center",
                    }}
                    helpText={HelpText(fontSize, props.theme)}
                    helpTitle={HelpTitle(fontSize, props.theme)}
                />
                {content}
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            currentPage="LoadGame"
                            flexDirection="column"
                            style={{ width: "100%" }}
                            buttonStyle={{
                                fontSize: fontSize * 1.2,
                                justifyContent: "flex-start",
                                width: "99%",
                                height: "2.5em",
                            }}
                            helpTitle={HelpTitle(fontSize, props.theme)}
                            helpText={HelpText(fontSize, props.theme)}
                            redirectMessage={null}
                            theme={props.theme}
                        />
                    }
                    appBarContent={
                        <Typography variant="h6" noWrap>
                            Load Game
                        </Typography>
                    }
                    theme={props.theme}
                >
                    {content}
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}
