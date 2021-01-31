import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {SearchBox} from "../Reuseables/SearchBox";
import {Portal, Typography} from "@material-ui/core";
import StorageIcon from '@material-ui/icons/Storage';
import {fontSize002, fontSize0024} from "../styles/fontSizes.jss";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ImgGrid} from "../Reuseables/ImgGrid/ImgGrid";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {HelpText} from "./HelpText";
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
                        height: "2.25em",
                        width: "100%",
                    }}
                    buttonStyle={{
                        fontSize: fontSize002,
                        justifyContent: "center",
                        height: "2.25em",
                    }}
                    helpText={HelpText(fontSize002, props.theme)}
                    helpTitle={<HelpTitle theme={props.theme}>Loading a Game</HelpTitle>}
                />
                <Portal>
                    <div className={`scrollbar-${props.theme}`}>
                        <div className={classes.flexbox}>
                            <ImgGrid
                                title={
                                    <>
                                        <Box className={classes.title_box}>
                                            <Typography className={classes.title}>Load Game</Typography>
                                            <StorageIcon className={classes.title_icon} size="large"/>
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
                                fontSize: fontSize0024,
                                justifyContent: "flex-start",
                                width: "99%",
                                height: "2.5em",
                            }}
                            helpText={HelpText(fontSize002, props.theme)}
                            helpTitle={<HelpTitle theme={props.theme}>Loading a Game</HelpTitle>}
                            redirectMessage={null}
                            theme={props.theme}
                        />
                    }
                    appBarContent={
                        <>
                            <Typography variant="h6" noWrap>
                                Load Game
                            </Typography>
                            <SearchBox
                                width='11em'
                                theme={props.theme}
                                updateSearchText={updateSearchText}
                            />
                        </>
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
                        searchText={searchText}
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