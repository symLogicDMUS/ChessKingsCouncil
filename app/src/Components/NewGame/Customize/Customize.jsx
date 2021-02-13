import React from "react";
import {v4 as uuidv4} from 'uuid';
import {Redirect} from "react-router-dom";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import {idAssign} from "../../../apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../apiHelpers/idAssign/standardIds";
import {firstUpdate} from "../../../game_logic/callHierarchyTop/firstUpdate";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";
import {DrawerContent} from "../../Reuseables/DrawerContent";
import {SubList} from "./SubList";
import {SideBar} from "../../Reuseables/SidBar";
import {NavBar} from "../../Reuseables/NavBar/NavBar";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import PermanentDrawer from "../../Reuseables/PermanentDrawer";
import PersistentDrawer from "../../Reuseables/PersistentDrawer";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import MuiAccordion from "../../Reuseables/MuiAccordion";
import {sideBarHeight} from "../../Reuseables/SidBar.jss";
import {HelpTitle} from "../../Reuseables/HelpTitle";
import {AppBarContent} from "./AppBarContent";
import {HelpText} from "./Help/HelpText";
import {ListTitle} from "./ListTitle";
import {copy} from "../../helpers/copy";
import {newData} from "../NewData";
import {fontSize0023, fontSizeW0045
} from "../../styles/fontSizes.jss";
import {
    drawer_component,
    ok_button,
    pawn_promotion,
    piece_profiles,
    promo_all_gen,
    promo_all_root,
    promo_all_container,
    promo_all_checkbox,
    scroll_table_added,
    scroll_table_button,
    scroll_table,
} from "./Customize.jss";


class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            searchText: '',
            redirect: false,
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
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.gameData = {}
        this.defs = {};
        this.promos = [];
        this.firstTime = false;
        this.promoAll = false;
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = {none: null};
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
        this.loadIdDict = this.loadIdDict.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    setDefs(defs) {
        this.defs = defs;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    accept() {
        this.idDict = this.loadIdDict();
        this.setStandardPromos();
        this.bundleGameData();
        this.setState({redirect: true})
    }

    /**
     * called by this.accept()
     * because will redirect to another page, combine game data into one object to make it easier.
     *
     * 1. set the game name, game type and player type, given as props.
     * 2. get new (standard) game data. Some part will be overridden by customization.
     * 3. override pawn promotions and id dictionary with what user put for these.
     * 4. build the piece definitions using the id dictionary, and overriding the standard piece definition dictionary.
     * 5. because using pieces that user created, don't know starting ranges until gone through game logic.
     * 6. set the starting ranges + enemy ranges, with what game logic determined.
     * note: when this method finishes,the parent method then sets the state that cases redirect to new page.
     */
    bundleGameData() {
        this.game_name = this.props.gameName; //1.
        this.type = this.props.gameType; //1.
        this.pt = this.props.playerType; //1.
        this.gameData = copy(newData); //2.
        this.gameData.promos = this.promos; //3.
        this.gameData.id_dict = this.idDict; //3.
        this.gameData.piece_defs = {}; //4.
        let name; //4.
        for (const id of Object.keys(this.idDict)) { //4.
            if (id !== 'k' && id !== 'p') { //4.
                name = this.idDict[id]; //4.
                this.gameData.piece_defs[name] = this.defs[name]; //4.
            }
        }

        //5.
        const dataEntry = firstUpdate(
            this.gameData.board,
            this.gameData.json_records,
            'W',
            this.pt,
            this.gameData.piece_defs,
            this.gameData.id_dict
        );
        //6.
        this.gameData.ranges = dataEntry.ranges;
        this.gameData.enemy_ranges = dataEntry.enemy_ranges;
    }

    /**
     * sub: name of a piece making sub.
     * subs is this.subs with key:value pairs reversed.
     * frontend uses standard:sub dict, and backend uses
     * sub:standard dict
     */
    prepareForIdAssign() {
        const names = [];
        const subs = {};
        //make object who's keys and values are the reverse of this.subs
        Object.entries(this.subs).forEach(([standard, sub]) => {
            if (sub != null) subs[sub] = standard;
        });
        if (this.promos.length > 20) {
            for (let i = 0; i < 20; i++) names.push(this.promos[i]);
        } else {
            for (const p of this.promos) names.push(p);
        }
        for (const s of Object.keys(subs)) {
            if (!names.includes(s)) names.push(s);
        }
        return [names, subs];
    }

    /**
     * for each standard piece check all starting pieces and if found make it a pawn promotion (except pawns and kings)
     */
    setStandardPromos() {
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

    loadIdDict() {
        const [names, subs] = this.prepareForIdAssign();
        return idAssign(names, subs);
    }

    toggleSub(sub, standardPiece) {
        this.subs[standardPiece] = (this.subs[standardPiece] === sub) ? null : sub;
        if (this.subs[standardPiece]) {
            Object.keys(this.subs).forEach((pieceName) => {
                /**if custom piece was previously a sub for different standard piece,that standard piece has no sub. */
                if (pieceName !== standardPiece && this.subs[pieceName] === sub)
                    this.subs[pieceName] = null;
            });
            this.newReplacement = sub;
            this.newReplaced = standardPiece;
        } else {
            this.newReplacement = null;
            this.newReplaced = null;
        }
        this.setState({binaryValue: !this.state.binaryValue});
    }

    togglePromo(pieceName) {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName);
            if (index > -1) this.promos.splice(index, 1);
        } else this.promos.push(pieceName);
        this.setState({binaryValue: !this.state.binaryValue});
    }

    togglePromoAll() {
        this.promoAll = !this.promoAll;
        // if promoAll now true than add every piece not already a promo to the list
        if (this.promoAll) {
            for (const pieceName of Object.keys(this.defs)) {
                if (!this.promos.includes(pieceName) && !this.standards.includes(pieceName)) {
                    this.promos.push(pieceName);
                }
            }
        } else {
            this.promos = [];
        }
        this.setState({binaryValue: !this.state.binaryValue});
    }

    updateSearchText(searchText) {
        this.setState({searchText: searchText});
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

    render() {
        return (
            <>
                {this.state.redirect ? (this.play()) : null}
                <div>
                    <MediaQuery minAspectRatio={'16/9'}>
                        <PermanentDrawer
                            drawerType="right"
                            theme={this.state.theme}
                            content={
                                <DrawerContent>
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
                                        theme={this.state.theme}
                                        style={piece_profiles('desktop')}
                                    />
                                </DrawerContent>
                            }
                            appBarContent={
                                <AppBarContent
                                    updateSearchText={this.updateSearchText}
                                    theme={this.state.theme}
                                >
                                    Customize Game
                                </AppBarContent>
                            }
                        >
                            <SubList
                                subs={this.subs}
                                theme={this.state.theme}
                            />
                            <ScrollTable
                                numRows={6}
                                key={uuidv4()}
                                listItems={this.promos}
                                theme={this.state.theme}
                                buttonStyle={scroll_table_button()}
                                style={scroll_table('desktop')}
                                addedStyle={drawer_component('desktop')}
                                title={
                                    <ListTitle theme={this.state.theme}>Pawn Promotions</ListTitle>
                                }
                            />
                            <Box style={promo_all_container('desktop')}>
                                <MuiCheckbox
                                    theme={this.state.theme}
                                    onClick={this.togglePromoAll}
                                    rootStyle={promo_all_root(resolveScreenCase('desktop'))}
                                    checkboxStyle={promo_all_checkbox(resolveScreenCase('desktop'))}
                                    style={promo_all_gen(resolveScreenCase('desktop'))}
                                >
                                    Promo All
                                </MuiCheckbox>
                            </Box>
                            <Button
                                onClick={this.accept}
                                style={ok_button('desktop')}
                                theme={this.state.theme}
                                variant={"contained"}
                                isDisabled={false}
                            >
                                Ok
                            </Button>
                        </PermanentDrawer>
                        <SideBar
                            theme={this.state.theme}
                            drawerType="left"
                            height={sideBarHeight}
                        >
                            <NavBar
                                currentPage="Customize"
                                screenCase='desktop'
                                helpText={HelpText(fontSize0023, this.state.theme)}
                                helpTitle={<HelpTitle theme={this.state.theme}>Customizing a Game</HelpTitle>}
                                theme={this.state.theme}
                            />
                        </SideBar>
                    </MediaQuery>
                    <MediaQuery maxAspectRatio={'1/1'}>
                        <PersistentDrawer
                            drawer={
                                <NavBar
                                    currentPage="Customize"
                                    screenCase='mobile'
                                    helpText={HelpText(fontSizeW0045, this.state.theme)}
                                    helpTitle={<HelpTitle theme={this.state.theme}>Customizing a Game</HelpTitle>}
                                    redirectMessage={null}
                                    theme={this.state.theme}
                                />
                            }
                            spacing={0}
                            theme={this.state.theme}
                            appBarContent={<Typography variant='h6' noWrap>Customize Game</Typography>}
                        >
                            <PieceProfiles
                                parentPage="Customize"
                                defs={this.defs}
                                subs={this.subs}
                                promos={this.promos}
                                theme={this.state.theme}
                                updateParent={this.setDefs}
                                toggleSub={this.toggleSub}
                                togglePromo={this.togglePromo}
                                togglePromoAll={this.togglePromoAll}
                                newReplacement={this.newReplacement}
                                newReplaced={this.newReplaced}
                                searchText={this.state.searchText}
                            />
                            <MuiAccordion theme={this.state.theme} >
                                {[
                                    {
                                        id: "sub-list",
                                        title: 'Sub List',
                                        body: (
                                            <SubList
                                                subs={this.subs}
                                                theme={this.state.theme}
                                            />
                                        ),
                                    },
                                    {
                                        id: "pawn-promo",
                                        title: 'Pawn Promotion List',
                                        body: (
                                            <div style={pawn_promotion(resolveScreenCase('mobile'))}>
                                                <ScrollTable
                                                    numRows={4}
                                                    key={uuidv4()}
                                                    listItems={this.promos}
                                                    theme={this.state.theme}
                                                    buttonStyle={scroll_table_button()}
                                                    style={scroll_table('mobile')}
                                                    addedStyle={scroll_table_added(resolveScreenCase('mobile'))}
                                                />
                                                <MuiCheckbox
                                                    theme={this.state.theme}
                                                    onClick={() => this.togglePromoAll()}
                                                    rootStyle={promo_all_root(resolveScreenCase('mobile'))}
                                                    checkboxStyle={promo_all_checkbox(resolveScreenCase('mobile'))}
                                                    style={promo_all_gen(resolveScreenCase('mobile'))}
                                                >
                                                    Promo All
                                                </MuiCheckbox>
                                            </div>
                                        ),
                                    },
                                ]}
                            </MuiAccordion>
                            <Button
                                onClick={this.accept}
                                style={ok_button('mobile')}
                                theme={this.state.theme}
                                variant={"contained"}
                                isDisabled={false}
                            >
                                Ok
                            </Button>
                        </PersistentDrawer>
                    </MediaQuery>
                </div>
            </>
        );
    }
}
export default Customize;
