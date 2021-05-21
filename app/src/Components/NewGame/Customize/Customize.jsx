import React from "react";
import {Redirect} from "react-router-dom";
import {newData} from "../NewData";
import {SubsList} from "./SubsList";
import {copy} from "../../helpers/copy";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {difference} from "../../helpers/setOps";
import {isSpecial} from "../../helpers/isSpecial";
import {CustomizeHelp} from "./Help/CustomizeHelp";
import {standardPieceDefs} from "../standardPieceDefs";
import {HelpTitle} from "../../Reuseables/NavBar/Help/HelpTitle";
import {firstUpdate} from "../../../game_logic/callHierarchyTop/firstUpdate";
import {MuiButton as Button} from "../../Reuseables/Clickables/MuiButton";
import {idAssign} from "../../../API/apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../API/apiHelpers/idAssign/standardIds";
import {standardPieceNames} from "../../helpers/standardPieceNames";
import {idsForRent} from "../../../API/apiHelpers/idAssign/idsForRent";
import withStyles from "@material-ui/core/styles/withStyles";
import CustomizeToolbar from "./CustomizeToolbar";
import {CustomizeTitle} from "./CustomizeTitle/CustomizeTitle";
import {ThemeContext} from "../../ThemeContext";
import {PromosList} from "./PromosList";
import {styles} from "./Customize.jss";

const PieceProfiles = React.lazy(() => import('../../PieceProfiles/PieceProfiles'));
const ResponsiveDrawer = React.lazy(() => import('../../Reuseables/Drawers/ResponsiveDrawer'));
const NavBar = React.lazy(() => import('../../Reuseables/NavBar/NavBar'));

class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
    }
    state = {
        theme: "dark",
        searchText: "",
        redirect: false,
        miniVariantTool: null,
        binaryValue: true,
    };
    subs = {
        Rook: null,
        Bishop: null,
        Queen: null,
        Knight: null,
    };
    colors = ["W", "B"];
    defs = {};
    idDict = {};
    gameData = {};
    promos = [];
    newData  = copy(newData);
    standardPieceNames = copy(standardPieceNames);
    standardPieceDefs = copy(standardPieceDefs);
    firstTime = false;
    promoAll = false;
    newReplacement = null;
    newReplaced = null;
    show = true;
    helpTitle = null;
    helpText = null;
    hmChildName = "none";
    hmChildren = { none: null };
    isTooltip = false;
    nameDisp = null;
    navExpanded = true;
    clientX = 0;
    clientY = 0;
    first = false;

    setDefs = defs => {
        this.defs = { ...this.standardPieceDefs, ...defs };
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    accept = () => {
        this.idDict = this.loadIdDict();
        this.addStartingStandardsToPromos();
        this.addBackupStandards();
        this.bundleGameData();
        this.setState({ redirect: true });
    };

    /**
     * called by this.accept()
     * because will redirect to another page, combine game data into one object to make it easier.
     * 1. get new (standard) game data, promos and idDict from what user put, and empty defs
     * 2. for ids not pawn or king, use the id to get the name, then use the name to get the def. Building object of defs
     *    used in this game.
     * 3. because using pieces the user created, need to do a run through of the game reducers to know what the starting ranges
     *    are.
     */
    bundleGameData = () => {
        this.gameData = {
            ...this.newData,
            promos: this.promos,
            ids: this.idDict,
            defs: this.standardPieceDefs,
        }; // 1.
        let name;
        for (const id of Object.keys(this.idDict)) {
            // 2.
            if (id !== "k" && id !== "p") {
                name = this.idDict[id];
                this.gameData.defs[name] = this.defs[name];
            }
        }

        // 3.
        const dataEntry = firstUpdate(
            this.gameData.board,
            this.gameData.json,
            "W",
            this.gameData.defs,
            this.gameData.ids
        );

        this.gameData.ranges = dataEntry.ranges;
        this.gameData.enemyRanges = dataEntry.enemyRanges;

        this.gameData.imgUrlStrs = this.resolveUrlImgRefs()
    };

    resolveUrlImgRefs = () => {
        const imgUrlRefs = []
        for (const pieceName of Object.keys(this.gameData.defs)) {
            for (const color of this.colors) {
                if (this.gameData.defs[pieceName][color].img.startsWith("https://")) {
                    imgUrlRefs.push(
                        this.gameData.defs[pieceName][color].img
                    );
                }
            }
        }
        return Array.from(new Set(imgUrlRefs))
    };

    /**
     * sub: name of a piece making sub.
     * subs is this.subs with key:value pairs reversed.
     * board-pattern use standard:sub dict, and game-reducers uses
     * sub:standard dict
     */
    prepareForIdAssign = () => {
        const names = [];
        const subs = {};

        /*make object who's keys are custom pieces and values are standard pieces.*/
        Object.entries(this.subs).forEach(([standard, sub]) => {
            if (sub != null) subs[sub] = standard;
        });

        /*
         * Adding names in promos to the list of all names. If there is more than 20 only add the first 20,
         * otherwise add all of them.
         * */
        if (this.promos.length > 20) {
            for (let i = 0; i <= 20; i++) names.push(this.promos[i]);
        } else {
            for (const p of this.promos) names.push(p);
        }

        /* add names in subs to the list of all names (if they were not added already when looking at promos).*/
        for (const s of Object.keys(subs)) {
            if (!names.includes(s)) names.push(s);
        }

        return [names, subs];
    };

    /**
     * for each standard piece check all starting pieces and if found make it a pawn promotion (except pawns and kings)
     */
    addStartingStandardsToPromos = () => {
        for (const [name1, id1] of Object.entries(standardIds)) {
            for (const [id2, name2] of Object.entries(this.idDict)) {
                if (
                    name1 === name2 &&
                    id1 === id2 &&
                    id1 !== "p" &&
                    id1 !== "k"
                ) {
                    this.promos.push(name1);
                }
            }
        }
    };

    addBackupStandards = () => {
        let idChoices;
        /* for standard piece names */
        for (const pieceName of this.standardPieceNames) {
            /* if not Pawn or King, and was subbed for */
            if (!isSpecial(pieceName) && this.subs[pieceName]) {
                idChoices = Array.from(
                    difference(
                        new Set(idsForRent),
                        new Set(Object.keys(this.idDict))
                    )
                );
                this.idDict[idChoices[0]] = pieceName;
                this.defs[pieceName] = this.standardPieceDefs[pieceName];
                this.promos.push(pieceName);
            }
        }
    };

    loadIdDict = () => {
        const [names, subs] = this.prepareForIdAssign();
        return idAssign(names, subs);
    };

    toggleSub = (sub, standardPiece) => {
        this.subs[standardPiece] =
            this.subs[standardPiece] === sub ? null : sub;
        if (this.subs[standardPiece]) {
            Object.keys(this.subs).forEach((pieceName) => {
                /* if custom piece was previously a sub for different standard piece,that standard piece has no sub. */
                if (pieceName !== standardPiece && this.subs[pieceName] === sub)
                    this.subs[pieceName] = null;
            });
            this.newReplacement = sub;
            this.newReplaced = standardPiece;
        } else {
            this.newReplacement = null;
            this.newReplaced = null;
        }
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    togglePromo = pieceName => {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName);
            if (index > -1) this.promos.splice(index, 1);
        } else this.promos.push(pieceName);
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    togglePromoAll = () => {
        this.promoAll = !this.promoAll;
        // if promoAll now true than add every piece not already a promo to the list
        if (this.promoAll) {
            for (const pieceName of Object.keys(this.defs)) {
                if (
                    !this.promos.includes(pieceName) &&
                    !this.standardPieceNames.includes(pieceName)
                ) {
                    this.promos.push(pieceName);
                }
            }
        } else {
            this.promos = [];
        }
        this.setState({ binaryValue: !this.state.binaryValue });
    };

    toggleMiniVariantTool = (toolName, clientX, clientY) => {
        if (this.state.miniVariantTool === toolName) {
            this.setState({ miniVariantTool: null, clientX: clientX, clientY: clientY });
        } else {
            this.setState({ miniVariantTool: toolName, clientX: clientX, clientY: clientY });
        }
    };

    updateSearchText = searchText => {
        this.setState({ searchText: searchText });
    };

    play = () => (
        <Redirect
            to={{
                pathname: "/Play",
                state: {
                    currentPath: "/Customize",
                    gameName: copy(this.gameName),
                    gameType: copy(this.gameType),
                    playerType: copy(this.playerType),
                    gameData: copy(this.gameData),
                },
            }}
        />
    );

    render() {
        return (
            <ThemeContext.Consumer>
                {value => <>
                    {this.state.redirect ? this.play() : null}
                    <ResponsiveDrawer
                        elevation={0}
                        minABPadding={true}
                        theme={value.themes.customize}
                        appBarContent={
                            <CustomizeTitle
                                onClick={this.togglePromoAll}
                                theme={value.themes.customize}
                                updateSearchText={this.updateSearchText}
                            />
                        }
                        tools={
                            <Box className={this.props.classes.tools}>
                                <SubsList
                                    subs={this.subs}
                                    theme={value.themes.customize}
                                />
                                <PromosList theme={value.themes.customize} tools={this.promos}/>
                                <Button
                                    onClick={this.accept}
                                    className={this.props.classes.ok_button}
                                    theme={value.themes.customize}
                                    variant={"contained"}
                                    size="large"
                                >
                                    Ok
                                </Button>
                            </Box>
                        }
                        toolButtons={
                            <CustomizeToolbar
                                subs={this.subs}
                                promos={this.promos}
                                theme={value.themes.customize}
                            />
                        }
                        navBar={
                            <NavBar
                                currentPage="Customize"
                                helpText={CustomizeHelp(value.themes.customize)}
                                helpTitle={
                                    <HelpTitle
                                        theme={value.themes.customize}
                                        fontSize='2.3vh'
                                    >
                                        Customizing a Game
                                    </HelpTitle>
                                }
                                theme={value.themes.customize}
                                additionalSettings={null}
                            />
                        }
                    >
                        <PieceProfiles
                            defs={this.defs}
                            subs={this.subs}
                            promos={this.promos}
                            parentPage="Customize"
                            toggleSub={this.toggleSub}
                            updateParent={this.setDefs}
                            newReplaced={this.newReplaced}
                            togglePromo={this.togglePromo}
                            searchText={this.state.searchText}
                            newReplacement={this.newReplacement}
                            className={this.props.classes.piece_profiles}
                            theme={value.themes.customize}
                        />
                        <MediaQuery maxWidth={960}>
                            <Button
                                onClick={this.accept}
                                className={this.props.classes.ok_button}
                                theme={value.themes.customize}
                                variant={"contained"}
                                size="large"
                            >
                                Ok
                            </Button>
                        </MediaQuery>
                    </ResponsiveDrawer>
                </>}
            </ThemeContext.Consumer>
        );
    }
}

export default withStyles(styles)(Customize);
