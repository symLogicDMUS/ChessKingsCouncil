import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {SearchBox} from "../Reuseables/SearchBox";
import {Portal, Typography} from "@material-ui/core";
import PanoramaIcon from "@material-ui/icons/Panorama";
import {fontSize002} from "../styles/fontSizes.jss";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ImgGrid} from "../Reuseables/ImgGrid/ImgGrid";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {HelpText, HelpTitle} from "./HelpText";
import {useStyles} from "./SavedGames.jss";

export function SavedGames(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize002});

    const [searchText, setSearchText] = useState("");

    const updateSearchText = (newText) => {
        setSearchText(newText)
    };

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
                                title={
                                    <>
                                        <Box className={classes.title_box}>
                                            <Typography className={classes.title}>Images</Typography>
                                            <PanoramaIcon className={classes.title_icon} size="large"/>
                                        </Box>
                                        <SearchBox updateSearchText={updateSearchText} theme={props.theme}/>
                                    </>
                                }
                                onClose={null}
                                topFlexbox={null}
                                theme={props.theme}
                                screenCase="desktop"
                                defaultChecked={true}
                                searchText={searchText}
                                onOkClick={props.load}
                                imgDict={props.imgDict}
                                setChoice={props.changeName}
                                onDeleteClick={props.deleteGame}
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
                            style={{width: "100%"}}
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
                    spacing={0}
                >
                    <ImgGrid
                        imgDict={props.imgDict}
                        setChoice={props.changeName}
                        imgNameChoice={props.selectedGame}
                        onDeleteClick={props.deleteGame}
                        onOkClick={props.load}
                        defaultChecked={true}
                        theme={props.theme}
                        screenCase="mobile"
                        itemWindowStyle={{
                            height: '48.5em'
                        }}
                        confirmDeleteMessage={
                            props.confirmDeleteMessage
                        }
                        topFlexbox={null}
                        onClose={null}
                        title={null}
                    />
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}