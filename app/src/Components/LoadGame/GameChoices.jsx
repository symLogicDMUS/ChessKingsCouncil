import React from "react";
import MediaQuery from "react-responsive/src";
import {Portal, Typography} from "@material-ui/core";
import { fontSize002 } from "../styles/fontSize.jss";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import { ImgGrid } from "../Reuseables/ImgGrid";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import { HelpText, HelpTitle } from "./HelpText";
import { useStyles } from "./GameChoices.jss";

export function GameChoices(props) {
    const classes = useStyles({ theme: props.theme, fontSize: fontSize002 });

    return (
        <>
            <MediaQuery minWidth={768}>
                <NavBar
                    currentPage="LoadGame"
                    theme={props.theme}
                    style={{
                        fontSize: fontSize002,
                        width: "100%",
                        height: "2.25em",
                    }}
                    buttonStyle={{
                        fontSize: fontSize002,
                        height: "2.25em",
                        justifyContent: "center",
                    }}
                    helpText={HelpText(fontSize002, props.theme)}
                    helpTitle={HelpTitle(fontSize002, props.theme)}
                />
                <Portal>
                    <div className={`scrollbar-${props.theme}`}>
                        <div className={classes.flexbox}>
                            <ImgGrid
                                title='Load Game'
                                onClose={null}
                                topFlexbox={null}
                                theme={props.theme}
                                screenCase="desktop"
                                imgDict={props.imgDict}
                                defaultChecked={true}
                                onOkClick={props.load}
                                onDeleteClick={props.deleteGame}
                                setChoice={props.changeName}
                                imgNameChoice={props.selectedGame}
                                confirmDeleteMessage={props.confirmDeleteMessage}
                            />
                        </div>
                    </div>
                </Portal>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            currentPage="LoadGame"
                            flexDirection="column"
                            style={{ width: "100%" }}
                            buttonStyle={{
                                fontSize: fontSize002 * 1.2,
                                justifyContent: "flex-start",
                                width: "99%",
                                height: "2.5em",
                            }}
                            helpTitle={HelpTitle(fontSize002, props.theme)}
                            helpText={HelpText(fontSize002, props.theme)}
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
                    <Portal>
                        <div className={`scrollbar-${props.theme}`}>
                            <div className={classes.flexbox}>
                                <ImgGrid
                                    title='Load Game'
                                    onClose={null}
                                    topFlexbox={null}
                                    theme={props.theme}
                                    screenCase="mobile"
                                    imgDict={props.imgDict}
                                    defaultChecked={true}
                                    onOkClick={props.load}
                                    onDeleteClick={props.deleteGame}
                                    setChoice={props.changeName}
                                    imgNameChoice={props.selectedGame}
                                    confirmDeleteMessage={props.confirmDeleteMessage}
                                />
                            </div>
                        </div>
                    </Portal>
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}