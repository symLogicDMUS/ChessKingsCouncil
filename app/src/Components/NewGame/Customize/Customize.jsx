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
import {NavBar} from "../../NavBar/NavBar";
import {SideBar} from "../../Reuseables/SidBar";
import {CheckBox} from "../../Reuseables/CheckBox";
import {Dropdown} from "../../Reuseables/Dropdown";
import ScrollTable from "../../Reuseables/ScrollTable";
import {Background} from "../../Reuseables/Background";
import {MuiButton as Button} from "../../Reuseables/MuiButton";
import PermanentDrawer from "../../Reuseables/PermanentDrawer";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {MessageModal} from "../../NavBar/Help/MessageModal";
import {DisplayBoardModal} from "../../PieceProfiles/DisplayBoardModal/DisplayBoardModal";
import {withStyles} from "@material-ui/core";
import {fontSizeAlt2 as fontSize} from "../../styles/fontSize.jss";
import {drawer_component, drawer_table_button, drawerWidth, sideBarHeight, sideBarWidth, styles} from "./Customize.jss";


class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            binaryValue: true,
            theme: "dark",
            playerType: "White",
            pieceName: null,
            rangeType: null,
            color: null,
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
        this.expandModals = [];
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
        this.accept = this.accept.bind(this);
        this.expand = this.expand.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleSub = this.toggleSub.bind(this);
        this.togglePromo = this.togglePromo.bind(this);
        this.togglePromoAll = this.togglePromoAll.bind(this);
        this.loadIdDict = this.loadIdDict.bind(this);
        this.toggleMessageModal = this.toggleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.setPlayerType = this.setPlayerType.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
        getDefs().then(([defs]) => {
            if (!defs) defs = {};
            this.defs = initStandardDefs(defs);
            this.setState({binaryValue: !this.state.binaryValue});
        });
    }

    handleChange(e) {
        this.selectedPiece = e.target.value;
        this.props.togleSub(this.props.piece, this.selectedPiece);
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

    expand(pieceName, color, rangeType) {
        this.setState({
            pieceName: pieceName,
            rangeType: rangeType,
            color: color,
        });
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

    toggleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    toggleMessageModal(boolVal) {
        this.setState({messageModal: boolVal});
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({messageModal: true});
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    setPlayerType(playerType) {
        this.setState({playerType: playerType});
    }

    getComponents(screenCase) {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        screenCase={screenCase}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.toggleMessageModal}
                    />
                )}
                {this.state.pieceName &&
                this.state.rangeType &&
                this.state.color && (
                    <DisplayBoardModal
                        theme={this.state.theme}
                        expand={this.expand}
                        color={this.state.color}
                        pieceName={this.state.pieceName}
                        rangeType={this.state.rangeType}
                        img={
                            this.defs[this.state.pieceName][
                                this.state.color
                                ]["img"]
                        }
                        range={
                            this.defs[this.state.pieceName][
                                this.state.color
                                ][this.state.rangeType]
                        }
                        location="d4"
                    />
                )}
                <div className={this.props.classes.customize}>
                    <Background theme={this.state.theme}/>
                    <PermanentDrawer
                        title='Customize Game'
                        drawerType='right'
                        width={drawerWidth}
                        theme={this.state.theme}
                        content={
                            <PieceProfiles
                                context="custom-game"
                                defs={this.defs}
                                promos={this.promos}
                                newReplacement={this.newReplacement}
                                newReplaced={this.newReplaced}
                                expand={this.expand}
                                toggleSub={this.toggleSub}
                                togglePromo={this.togglePromo}
                                theme={this.state.theme}
                            />
                        }
                    >
                        <Box className={this.props.classes.promo_all_container}>
                            <CheckBox
                                labelText="Promo All"
                                clickValue={null}
                                theme={this.state.theme}
                                clickMethod={this.togglePromoAll}
                                style={{fontSize: fontSize*1.2}}
                                rootStyle={{marginLeft: '-0.15em', marginTop: 0}}
                            />
                        </Box>
                        <ScrollTable
                            listItems={this.promos}
                            theme={this.state.theme}
                            style={{...drawer_component(fontSize), marginTop: 0, isOutline: true}}
                            buttonStyle={drawer_table_button(fontSize)}
                            title={
                                <Typography
                                    className={this.props.classes.list_title}
                                >
                                    Pawn Promotions
                                </Typography>
                            }
                        />
                        <SubList subs={this.subs} theme={this.state.theme}/>
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
                            variant='outlined'
                            label='Play As'
                            inputLabel='Play As'
                            inputId='play-as-input'
                            selectId='play-as-selected'
                            labelId='play-as-label'
                        />
                        {/*<Button*/}
                        {/*    onClick={this.accept}*/}
                        {/*    style={drawer_component(fontSize)}*/}
                        {/*    theme={this.state.theme}*/}
                        {/*    variant={'contained'}*/}
                        {/*    isDisabled={false}*/}
                        {/*>*/}
                        {/*    Ok*/}
                        {/*</Button>*/}
                    </PermanentDrawer>
                    <SideBar theme={this.state.theme} drawerType='left' width={sideBarWidth} height={sideBarHeight}>
                        <NavBar
                            currentPage="Customize"
                            flexDirection='column'
                            height={sideBarHeight * 0.98}
                            width={sideBarWidth * 0.98}
                            unsavedChanges={false}
                            theme={this.state.theme}
                        />
                    </SideBar>
                </div>
            </>
        );
    }

    render() {
        // if (this.promoListUpdate) this.divideList();
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    {this.getComponents("desktop")}
                </MediaQuery>
                {/* <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery> */}
            </>
        );
    }
}

export default withStyles(styles)(Customize);
