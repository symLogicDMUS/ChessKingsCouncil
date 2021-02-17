import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {SearchBox} from "../Reuseables/SearchBox";
import {Portal, Typography} from "@material-ui/core";
import StorageIcon from '@material-ui/icons/Storage';
import {Background} from "../Reuseables/Background";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ImgGrid} from "../Reuseables/ImgGrid/ImgGrid";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {imgGridRootStyle, search_box, useStyles} from "./SavedGames.jss";
import {pageTitleStyle} from "../Reuseables/PersistentDrawer.jss";

export function SavedGames(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize002});

    const [searchText, setSearchText] = useState("");

    const updateSearchText = (newText) => {
        setSearchText(newText)
    };

    return (
        <>
            <MediaQuery minAspectRatio={'1/1'} minDeviceWidth={992}>
                <Background theme={props.theme} navBar={true} currentPage='LoadGame'/>
                <NavBar
                    currentPage="LoadGame"
                    screenCase='desktop'
                    theme={props.theme}
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
                                defaultChecked={true}
                                rootStyle={imgGridRootStyle()}
                                searchText={searchText}
                                loaded={props.loaded}
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
            <MediaQuery maxAspectRatio={'1/1'}>
                <Background theme={props.theme} appBar={true} currentPage='LoadGame'/>
                <PersistentDrawer
                    drawer={
                        <NavBar
                            currentPage="LoadGame"
                            screenCase="mobile"
                            helpText={HelpText(fontSizeW0045, props.theme)}
                            helpTitle={<HelpTitle theme={props.theme}>Loading a Game</HelpTitle>}
                            redirectMessage={null}
                            theme={props.theme}
                        />
                    }
                    appBarContent={
                        <>
                            <Typography variant="h6" noWrap style={pageTitleStyle()}>
                                Load Game
                            </Typography>
                        </>
                    }
                    theme={props.theme}
                    spacing={0}
                >
                    <ImgGrid
                        imgDict={props.imgDict}
                        loaded={props.loaded}
                        setChoice={props.changeName}
                        imgNameChoice={props.selectedGame}
                        onDeleteClick={props.deleteGame}
                        onOkClick={props.load}
                        defaultChecked={true}
                        searchText={searchText}
                        theme={props.theme}
                        confirmDeleteMessage={
                            props.confirmDeleteMessage
                        }
                        topFlexbox={null}
                        onClose={null}
                        title={
                            <SearchBox
                                width='100%'
                                theme={props.theme}
                                style={search_box('mobile')}
                                updateSearchText={updateSearchText}
                            />
                        }
                    />
                </PersistentDrawer>
            </MediaQuery>
        </>
    );
}