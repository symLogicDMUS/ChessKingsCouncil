import React from "react";
import {v4 as uuidv4} from 'uuid';
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import {idAssign} from "../../../apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../apiHelpers/idAssign/standardIds";
import {SubList} from "./SubList";
import {NavBar} from "../../Reuseables/NavBar/NavBar";
import {SideBar} from "../../Reuseables/SidBar";
import {MuiCheckbox} from "../../Reuseables/MuiCheckbox";
import {Dropdown} from "../../Reuseables/Dropdown";
import ScrollTable from "../../Reuseables/ScrollTable/ScrollTable";
import {Background} from "../../Reuseables/Background";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import PermanentDrawer from "../../Reuseables/PermanentDrawer";
import PersistentDrawer from "../../Reuseables/PersistentDrawer";
import MuiAccordion from "../../Reuseables/MuiAccordion";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {navBarWidth} from "../../Reuseables/NavBar/NavBar.jss";
import {sideBarHeight, sideBarWidth} from "../../Reuseables/SidBar.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {navBarButtonWidth} from "../../Reuseables/NavBar/NavBarButton.jss";
import {fontSizeAlt2 as fontSize} from "../../styles/fontSize.jss";
import {withStyles} from "@material-ui/core";
import {
    drawer_component,
    drawer_table_button, drawerItemMarginLeft, drawerItemMarginTopBottom,
    drawerItemWidth, ok_button, promo_all_container,
    styles,
} from "./Customize.jss";
import {mobileScaler} from "../../PieceProfiles/ProfileWB.jss";
import {availHeight} from "../../helpers/windowMeasurments";
import {HelpText, HelpTitle} from "./HelpText";
import Box from "@material-ui/core/Box";

class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
        };
        this.subs = {
            Rook: null,
            Bishop: null,
            Queen: null,
            Knight: null,
        };
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
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
        this.searchText = "";
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
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    setDefs(defs) {
        this.defs = defs;
        this.setState({binaryValue: !this.state.binaryValue});
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
    setStandardPromos(idDict) {
        for (const [name1, id1] of Object.entries(standardIds)) {
            for (const [id2, name2] of Object.entries(idDict)) {
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

    /**
     * idD
     * @returns {*|{}}
     */
    loadIdDict() {
        const [names, subs] = this.prepareForIdAssign();
        return idAssign(names, subs);
    }

    accept() {
        const idDict = this.loadIdDict();
        this.setStandardPromos(idDict);
        this.props.loadNewCustom(
            idDict,
            this.defs,
            this.promos,
            this.props.playerType
        );
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
        // this.promoListUpdate = true;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    togglePromoAll() {
        this.promoAll = !this.promoAll;
        //if promoAll now true than add every piece not already a promo to the list
        if (this.promoAll) {
            for (const pieceName of Object.keys(this.defs)) {
                if (!this.promos.includes(pieceName)) {
                    this.promos.push(pieceName);
                }
            }
        } else {
            this.promos = [];
        }
        this.setState({binaryValue: !this.state.binaryValue});
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    render() {
        return (
            <>
                <div className={this.props.classes.customize}>
                    <MediaQuery minDeviceWidth={768}>
                        <Background theme={this.state.theme}/>
                        <PermanentDrawer
                            drawerType="right"
                            width={drawerWidth}
                            theme={this.state.theme}
                            content={
                                <PieceProfiles
                                    parentPage="Customize"
                                    defs={this.defs}
                                    promos={this.promos}
                                    updateParent={this.setDefs}
                                    newReplacement={this.newReplacement}
                                    newReplaced={this.newReplaced}
                                    toggleSub={this.toggleSub}
                                    togglePromo={this.togglePromo}
                                    theme={this.state.theme}
                                />
                            }
                            appBarContent={
                                <Typography variant="h6" noWrap>
                                    Customize Game
                                </Typography>
                            }
                        >
                            <SubList
                                subs={this.subs}
                                theme={this.state.theme}
                            />
                            <ScrollTable
                                numRows={4}
                                key={uuidv4()}
                                listItems={this.promos}
                                theme={this.state.theme}
                                style={{
                                    ...drawer_component(fontSize),
                                    marginTop: 0,
                                    isOutline: true,
                                }}
                                buttonStyle={drawer_table_button(fontSize)}
                                title={
                                    <Typography
                                        className={
                                            this.props.classes.list_title
                                        }
                                    >
                                        Pawn Promotions
                                    </Typography>
                                }
                            />
                            <Box className={this.props.classes.promo_all_container}>
                                <MuiCheckbox
                                    theme={this.state.theme}
                                    onClick={this.togglePromoAll}
                                    style={{fontSize: fontSize}}
                                    rootStyle={{
                                        marginLeft: drawerItemWidth * -0.008,
                                    }}
                                >
                                    Promo All
                                </MuiCheckbox>
                            </Box>
                            <Button
                                onClick={this.accept}
                                style={ok_button(fontSize)}
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
                            width={sideBarWidth}
                            height={sideBarHeight}
                        >
                            <NavBar
                                currentPage="Customize"
                                flexDirection="column"
                                style={{width: navBarWidth}}
                                buttonStyle={{
                                    fontSize: fontSize,
                                    width: navBarButtonWidth,
                                    justifyContent: "flex-start",
                                }}
                                helpTitle={HelpTitle(fontSize, this.state.theme)}
                                helpText={HelpText(fontSize, this.state.theme)}
                                theme={this.state.theme}
                            />
                        </SideBar>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={767}>
                        <PersistentDrawer
                            drawer={
                                <NavBar
                                    currentPage="Customize"
                                    flexDirection="column"
                                    style={{width: "100%"}}
                                    buttonStyle={{
                                        fontSize: fontSize * 1.2,
                                        justifyContent: "flex-start",
                                        width: "99%",
                                        height: "2.5em",
                                    }}
                                    helpTitle={HelpTitle(fontSize, this.state.theme)}
                                    helpText={HelpText(fontSize, this.state.theme)}
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
                                promos={this.promos}
                                updateParent={this.setDefs}
                                newReplacement={this.newReplacement}
                                newReplaced={this.newReplaced}
                                toggleSub={this.toggleSub}
                                togglePromo={this.togglePromo}
                                togglePromoAll={this.togglePromoAll}
                                theme={this.state.theme}
                            />
                            <MuiAccordion theme={this.state.theme} style={{height: '2.4em'}}>
                                {[
                                    {
                                        id: "sub-list",
                                        title: (
                                            <Typography>Sub List</Typography>
                                        ),
                                        body: (
                                            <SubList
                                                subs={this.subs}
                                                theme={this.state.theme}
                                            />
                                        ),
                                    },
                                    {
                                        id: "pawn-promo",
                                        title: (
                                            <Typography>
                                                Pawn Promotion List
                                            </Typography>
                                        ),
                                        body: (
                                            <>
                                                <ScrollTable
                                                    numRows={4}
                                                    key={uuidv4()}
                                                    listItems={this.promos}
                                                    theme={this.state.theme}
                                                    style={{
                                                        ...drawer_component(
                                                            fontSize * mobileScaler,
                                                        ),
                                                        marginTop: 0,
                                                        isOutline: true,
                                                    }}
                                                    buttonStyle={drawer_table_button(
                                                        fontSize * mobileScaler,
                                                    )}
                                                />
                                                <MuiCheckbox
                                                    theme={this.state.theme}
                                                    onClick={() => this.togglePromoAll()}
                                                    style={{
                                                        fontSize:
                                                            fontSize * 0.8,
                                                    }}
                                                    rootStyle={{
                                                        marginLeft:
                                                            drawerItemWidth *
                                                            0.025,
                                                    }}
                                                >
                                                    Promo All
                                                </MuiCheckbox>
                                            </>
                                        ),
                                    },
                                    {
                                        id: 'promo-',

                                    }
                                ]}
                            </MuiAccordion>
                            <Button
                                onClick={this.accept}
                                style={ok_button(fontSize)}
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

export default withStyles(styles)(Customize);
