import React from "react";
import MediaQuery from "react-responsive";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import {getDefs} from "../../../API/getDefs";
import {idAssign} from "../../../apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../apiHelpers/idAssign/standardIds";
import {initStandardDefs} from "../../../apiHelpers/initStandardDefs";
import {SubList} from "./SubList";
import {NavBar} from "../../Reuseables/NavBar";
import {SideBar} from "../../Reuseables/SidBar";
import {CheckBox} from "../../Reuseables/CheckBox";
import {Dropdown} from "../../Reuseables/Dropdown";
import ScrollTable from "../../Reuseables/ScrollTable";
import {Background} from "../../Reuseables/Background";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import PermanentDrawer from "../../Reuseables/PermanentDrawer";
import PersistentDrawer from "../../Reuseables/PersistentDrawer";
import MuiAccordion from "../../Reuseables/MuiAccordion";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {MessageModal} from "../../Reuseables/Help/MessageModal";
import {DisplayBoardModal} from "../../PieceProfiles/DisplayBoardModal/DisplayBoardModal";
import {navBarWidth} from "../../Reuseables/NavBar.jss";
import {sideBarHeight, sideBarWidth} from "../../Reuseables/SidBar.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {navBarButtonWidth} from "../../Reuseables/NavBarButton.jss";
import {fontSizeAlt2 as fontSize} from "../../styles/fontSize.jss";
import {withStyles} from "@material-ui/core";
import {
    drawer_component,
    drawer_table_button,
    drawerItemWidth, ok_button,
    styles,
} from "./Customize.jss";
import {mobileScaler} from "../../PieceProfiles/ProfileWB.jss";
import {availHeight} from "../../helpers/windowMeasurments";

class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            playerType: "White",
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
        this.playerType = "test";
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
        this.setPlayerType = this.setPlayerType.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    setDefs(defs) {
        this.defs = defs;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    /**
     * subs is this.subs with key:value pairs reversed.
     * frontend uses standard:sub dict, and backend uses
     * sub: standard dict
     */
    prepareForSubAssign() {
        const names = [];
        const subs = {};
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

    loadIdDict() {
        const [names, subs] = this.prepareForSubAssign();
        return idAssign(names, subs);
    }

    accept() {
        const idDict = this.loadIdDict();
        this.setStandardPromos(idDict);
        this.props.loadNewCustom(
            idDict,
            this.defs,
            this.promos,
            this.state.playerType
        );
    }

    toggleSub(sub, standardPiece) {
        this.subs[standardPiece] = sub;
        Object.keys(this.subs).forEach((pieceName) => {
            if (pieceName !== standardPiece && this.subs[pieceName] === sub)
                this.subs[pieceName] = null;
        });
        this.newReplacement = sub;
        this.newReplaced = standardPiece;
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
        if (this.promoAll) {
            for (const pieceName of Object.keys(this.defs)) {
                if (!this.promos.includes(pieceName)) {
                    this.promos.push(pieceName);
                }
            }
        } else {
            this.promos = [];
        }
        // this.promoListUpdate = true;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    setPlayerType(playerType) {
        this.setState({playerType: playerType});
    }

    render() {
        // if (this.promoListUpdate) this.divideList();
        return (
            <>

                <div className={this.props.classes.customize}>
                    <MediaQuery minDeviceWidth={768}>
                        <Background theme={this.state.theme} />
                        <PermanentDrawer
                            drawerType="right"
                            width={drawerWidth}
                            theme={this.state.theme}
                            content={
                                <PieceProfiles
                                    parentPage="Customize"
                                    defs={this.defs}
                                    promos={this.promos}
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
                            <ScrollTable
                                numRows={4}
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
                                subHeader={
                                    <CheckBox
                                        labelText="Promo All"
                                        clickValue={null}
                                        theme={this.state.theme}
                                        clickMethod={this.togglePromoAll}
                                        style={{fontSize: fontSize * 0.8}}
                                        rootStyle={{
                                            marginLeft: drawerItemWidth * 0.025,
                                        }}
                                    />
                                }
                            />
                            <SubList
                                subs={this.subs}
                                theme={this.state.theme}
                            />
                            <Dropdown
                                updateParent={this.setPlayerType}
                                list={[
                                    <MenuItem value="None">
                                        <em>None</em>
                                    </MenuItem>,
                                    <MenuItem value="Test">Test</MenuItem>,
                                    <MenuItem value="White">White</MenuItem>,
                                    <MenuItem value="Black">Black</MenuItem>,
                                ]}
                                theme={this.state.theme}
                                style={drawer_component(fontSize)}
                                overwrite={null}
                                fullWidth={true}
                                variant="outlined"
                                label="Play As"
                                inputLabel="Play As"
                                inputId="play-as-input"
                                selectId="play-as-selected"
                                labelId="play-as-label"
                            />
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
                                updateParent={this.setDefs}
                                promos={this.promos}
                                newReplacement={this.newReplacement}
                                newReplaced={this.newReplaced}
                                toggleSub={this.toggleSub}
                                togglePromo={this.togglePromo}
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
                                        id: "promo-list",
                                        title: (
                                            <Typography>
                                                Promotion List
                                            </Typography>
                                        ),
                                        body: (
                                            <ScrollTable
                                                numRows={4}
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
                                                subHeader={
                                                    <CheckBox
                                                        labelText="Promo All"
                                                        clickValue={null}
                                                        theme={this.state.theme}
                                                        clickMethod={
                                                            this.togglePromoAll
                                                        }
                                                        style={{
                                                            fontSize:
                                                                fontSize * 0.8,
                                                        }}
                                                        rootStyle={{
                                                            marginLeft:
                                                                drawerItemWidth *
                                                                0.025,
                                                        }}
                                                    />
                                                }
                                            />
                                        ),
                                    },
                                    {
                                        id: "set-player-type",
                                        title: (
                                            <Typography>
                                                Set Player Type
                                            </Typography>
                                        ),
                                        body: (
                                            <Dropdown
                                                updateParent={
                                                    this.setPlayerType
                                                }
                                                list={[
                                                    <MenuItem value="None">
                                                        <em>None</em>
                                                    </MenuItem>,
                                                    <MenuItem value="Test">
                                                        Test
                                                    </MenuItem>,
                                                    <MenuItem value="White">
                                                        White
                                                    </MenuItem>,
                                                    <MenuItem value="Black">
                                                        Black
                                                    </MenuItem>,
                                                ]}
                                                theme={this.state.theme}
                                                style={drawer_component(
                                                    fontSize
                                                )}
                                                overwrite={null}
                                                fullWidth={true}
                                                variant="outlined"
                                                label="Play As"
                                                inputLabel="Play As"
                                                inputId="play-as-input"
                                                selectId="play-as-selected"
                                                labelId="play-as-label"
                                            />
                                        ),
                                    },
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
