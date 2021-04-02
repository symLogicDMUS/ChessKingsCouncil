import React from "react";
import {Redirect} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {NavBar} from "../../Reuseables/NavBar/NavBar";
import {MuiCheckbox} from "../../Reuseables/Clickables/MuiCheckbox";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {firstUpdate} from "../../../game_logic/callHierarchyTop/firstUpdate";
import {MuiButton as Button} from "../../Reuseables/Clickables/MuiButton";
import {HelpTitle} from "../../Reuseables/NavBar/Help/HelpTitle";
import {HelpText} from "./Help/HelpText";
import {ListTitle} from "./ListTitle";
import {SubList} from "./SubList";
import {copy} from "../../helpers/copy";
import {newData} from "../NewData";
import {difference} from "../../helpers/setOps";
import {isSpecial} from "../../helpers/isSpecial";
import {standardPieceDefs} from "../standardPieceDefs/dev1";
import {idAssign} from "../../../API/apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../API/apiHelpers/idAssign/standardIds";
import {idsForRent} from "../../../API/apiHelpers/idAssign/idsForRent";
import {fontSize0023, fontSize0026} from "../../styles/fontSizes.jss";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {specialPieceImgUrlList} from "../../MyPieces/specialPieceImgUrlList/dev1";
import ResponsiveDrawer from "../../Reuseables/Drawers/ResponsiveDrawer";
import {ToolButton} from "../../Reuseables/Clickables/ToolButton";
import withStyles from "@material-ui/core/styles/withStyles";
import {textColor, styles} from "./Customize.jss";
import {SearchBox} from "../../Reuseables/UserInput/SearchBox";

class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            searchText: "",
            redirect: false,
            miniVariantTool: null,
            binaryValue: true,
        };
        this.gameName = this.props.location.state.gameName;
        this.gameType = this.props.location.state.gameType;
        this.playerType = this.props.location.state.playerType;
        this.subs = {
            Rook: null,
            Bishop: null,
            Queen: null,
            Knight: null,
        };
        this.colors = ["W", "B"];
        this.standardPieceNames = [
            "Rook",
            "Bishop",
            "Queen",
            "Knight",
            "Pawn",
            "King",
        ];
        this.defs = {};
        this.idDict = {};
        this.gameData = {};
        this.promos = [];
        this.firstTime = false;
        this.promoAll = false;
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = { none: null };
        this.isTooltip = false;
        this.nameDisp = null;
        this.navExpanded = true;
        this.clientX = 0;
        this.clientY = 0;
        this.first = false;
        this.setDefs = this.setDefs.bind(this);
        this.accept = this.accept.bind(this);
        this.toggleSub = this.toggleSub.bind(this);
        this.togglePromo = this.togglePromo.bind(this);
        this.togglePromoAll = this.togglePromoAll.bind(this);
        this.toggleMiniVariantTool = this.toggleMiniVariantTool.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
        this.loadIdDict = this.loadIdDict.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    componentDidUpdate() {
        if (this.state.theme === "tan") {
            document.body.className = "tan-background-alt";
        } else {
            document.body.className = `${this.state.theme}-background`;
        }
    }

    setDefs(defs) {
        this.defs = { ...standardPieceDefs, ...defs };
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    accept() {
        this.idDict = this.loadIdDict();
        this.addStartingStandardsToPromos();
        this.addBackupStandards();
        this.bundleGameData();
        this.setState({ redirect: true });
    }

    /**
     * called by this.accept()
     * because will redirect to another page, combine game data into one object to make it easier.
     * 1. get new (standard) game data, promos and idDict from what user put, and empty piece_defs
     * 2. for ids not pawn or king, use the id to get the name, then use the name to get the def. Building object of defs
     *    used in this game.
     * 3. because using pieces the user created, need to do a run through of the game logic to know what the starting ranges
     *    are.
     */
    bundleGameData() {
        this.gameData = {
            ...copy(newData),
            promos: this.promos,
            id_dict: this.idDict,
            piece_defs: standardPieceDefs,
            imgUrlList: copy(specialPieceImgUrlList),
        }; //1.
        let name;
        for (const id of Object.keys(this.idDict)) {
            //2.
            if (id !== "k" && id !== "p") {
                name = this.idDict[id];
                this.gameData.piece_defs[name] = this.defs[name];
            }
        }

        //3.
        const dataEntry = firstUpdate(
            this.gameData.board,
            this.gameData.json_records,
            "W",
            this.gameData.piece_defs,
            this.gameData.id_dict
        );

        this.gameData.ranges = dataEntry.ranges;
        this.gameData.enemy_ranges = dataEntry.enemyRanges;

        for (const pieceName of Object.keys(this.gameData.piece_defs)) {
            for (const color of this.colors) {
                this.gameData.imgUrlList.push(
                    this.gameData.piece_defs[pieceName][color].img
                );
            }
        }
    }

    /**
     * sub: name of a piece making sub.
     * subs is this.subs with key:value pairs reversed.
     * Components use standard:sub dict, and game-logic uses
     * sub:standard dict
     */
    prepareForIdAssign() {
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
    }

    /**
     * for each standard piece check all starting pieces and if found make it a pawn promotion (except pawns and kings)
     */
    addStartingStandardsToPromos() {
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
    }

    addBackupStandards() {
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
                this.defs[pieceName] = standardPieceDefs[pieceName];
                this.promos.push(pieceName);
            }
        }
    }

    loadIdDict() {
        const [names, subs] = this.prepareForIdAssign();
        return idAssign(names, subs);
    }

    toggleSub(sub, standardPiece) {
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
    }

    togglePromo(pieceName) {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName);
            if (index > -1) this.promos.splice(index, 1);
        } else this.promos.push(pieceName);
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    togglePromoAll() {
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
    }

    toggleMiniVariantTool(toolName) {
        if (this.state.miniVariantTool === toolName) {
            this.setState({ miniVariantTool: null });
        } else {
            this.setState({ miniVariantTool: toolName });
        }
    }

    updateSearchText(searchText) {
        this.setState({ searchText: searchText });
    }

    play() {
        return (
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
    }

    updateTheme(theme) {
        this.setState({ theme: theme });
    }

    render() {
        return (
            <>
                {this.state.redirect ? this.play() : null}
                {this.state.miniVariantTool === "Subs" ? (
                    <SubList subs={this.subs} theme={this.state.theme} />
                ) : null}

                {this.state.miniVariantTool === "Promos" ? (
                    <ScrollTable
                        numRows={6}
                        listItems={this.promos}
                        theme={this.state.theme}
                        key="pawn-promotions-wide"
                        rootClassName={this.props.classes.scroll_table}
                        addedClassName={this.props.classes.drawer_component}
                        listItemClassName={
                            this.props.classes.scroll_table_list_item
                        }
                        arrowButtonClassName={
                            this.props.classes.scroll_table_button
                        }
                        textClassName={
                            this.props.classes.scroll_table_text
                        }
                        title={
                            <ListTitle className={this.props.classes.scroll_table_title} theme={this.state.theme}>
                                Pawn Promotions
                            </ListTitle>
                        }
                    />
                ) : null}
                <ResponsiveDrawer
                    elevation={0}
                    theme={this.state.theme}
                    appBarType='3item'
                    appBarContent={[
                        <Typography
                            variant='h6'
                            className={this.props.classes.title}
                            style={textColor(this.state.theme)}
                        >
                            Customize Game
                        </Typography>,
                        <MuiCheckbox
                            noWrap={true}
                            variant='caption'
                            theme={this.state.theme}
                            onClick={this.togglePromoAll}
                            rootClassName={this.props.classes.promo_all}
                        >
                            Promo All
                        </MuiCheckbox>,
                        <SearchBox
                            updateSearchText={this.updateSearchText}
                            className={this.props.classes.search}
                            theme={this.state.theme}
                            isMenuItem={true}
                        />,
                    ]}
                    tools={
                        <>
                            <SubList
                                subs={this.subs}
                                theme={this.state.theme}
                            />
                            <ScrollTable
                                numRows={6}
                                listItems={this.promos}
                                theme={this.state.theme}
                                key="pawn-promotions-wide"
                                rootClassName={this.props.classes.scroll_table}
                                addedClassName={
                                    this.props.classes.drawer_component
                                }
                                listItemClassName={
                                    this.props.classes.scroll_table_list_item
                                }
                                arrowButtonClassName={
                                    this.props.classes.scroll_table_button
                                }
                                textClassName={
                                    this.props.classes.scroll_table_text
                                }
                                title={
                                    <ListTitle className={this.props.classes.scroll_table_title} theme={this.state.theme}>
                                        Pawn Promotions
                                    </ListTitle>
                                }
                            />
                            <Button
                                onClick={this.accept}
                                className={this.props.classes.ok_button}
                                theme={this.state.theme}
                                variant={"outline"}
                                startIcon={
                                    <CheckCircleOutlineIcon/>
                                }
                                size="large"
                            >
                                Ok
                            </Button>
                        </>
                    }
                    toolButtons={
                        <>
                            <ToolButton
                                text="Sub List"
                                iconName="subs"
                                theme={this.state.theme}
                                isActive={this.state.miniVariantTool === "Subs"}
                                onClick={() =>
                                    this.toggleMiniVariantTool("Subs")
                                }
                            />
                            <ToolButton
                                text="Pawn Promotion List"
                                iconName="promos"
                                theme={this.state.theme}
                                isActive={
                                    this.state.miniVariantTool === "Promos"
                                }
                                onClick={() =>
                                    this.toggleMiniVariantTool("Promos")
                                }
                            />
                        </>
                    }
                    navBar={
                        <NavBar
                            currentPage="Customize"
                            helpText={HelpText(fontSize0023, this.state.theme)}
                            helpTitle={
                                <HelpTitle
                                    theme={this.state.theme}
                                    fontSize={fontSize0026}
                                >
                                    Customizing a Game
                                </HelpTitle>
                            }
                            theme={this.state.theme}
                            updateTheme={this.updateTheme}
                            additionalSettings={null}
                        />
                    }
                >
                    <PieceProfiles
                        parentPage="Customize"
                        defs={this.defs}
                        subs={this.subs}
                        promos={this.promos}
                        updateParent={this.setDefs}
                        newReplacement={this.newReplacement}
                        newReplaced={this.newReplaced}
                        toggleSub={this.toggleSub}
                        togglePromo={this.togglePromo}
                        searchText={this.state.searchText}
                        updateTheme={this.updateTheme}
                        className={this.props.classes.piece_profiles}
                        theme={this.state.theme}
                    />
                </ResponsiveDrawer>
            </>
        );
    }
}

export default withStyles(styles)(Customize);