import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Dropdown } from "../Reuseables/Dropdown";
import { fontSize } from "../styles/fontSize.jss";
import { MuiButton as Button } from "../Reuseables/MuiButton";
import { button, dropdown, useStyles } from "./LoadGameFromList.jss";
import MediaQuery from "react-responsive/src";
import { NavBar } from "../Reuseables/NavBar";
import PersistentDrawer from "../Reuseables/PersistentDrawer";

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
                        variant={"contained"}
                        theme={props.theme}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                    >
                        Play
                    </Button>
                    <Button
                        onClick={() => props.askDeleteGame()}
                        variant={"contained"}
                        theme={props.theme}
                        isDisabled={props.isDisabled()}
                        style={button(fontSize)}
                    >
                        Delete
                    </Button>
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
