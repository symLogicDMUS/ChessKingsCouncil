import React from "react";
import MediaQuery from "react-responsive";
import {withStyles} from "@material-ui/core";
import NavBar from "../../NavBar/NavBar";
import {Ok} from "./Bottom/CustomiseOk";
import {SubList} from "./Bottom/SubList";
import {getDefs} from "../../../API/getDefs";
import {PromoList} from "./Bottom/PromoList";
import {CheckBox} from "../../Reuseables/CheckBox";
import {MessageModal} from "../../NavBar/Help/MessageModal";
import {PlayAsDropdown as PlayerType} from "./PlayAsDropdown";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {idAssign} from "../../../apiHelpers/idAssign/top/idAssign";
import {standardIds} from "../../../apiHelpers/idAssign/standardIds";
import {initStandardDefs} from "../../../apiHelpers/initStandardDefs";
import {DisplayBoardModal} from "../../PieceProfiles/DisplayBoardModal/DisplayBoardModal";
import {styles} from "./Customize.jss";
import {fontSizes} from "../../styles/fontSizes";
import {margin, pieceProfilesHeight, profileHeaderHeight} from "./sizeAndPosVariables.jss";

class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = {
            binaryValue: true,
            theme: "dark",
            pieceName: null,
            rangeType: null,
            color: null,
        };
        this.defs = {};
        this.promos = [];
        this.expandModals = [];
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
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.subs = {
            Rook: null,
            Bishop: null,
            Queen: null,
            Knight: null,
        };
        this.accept = this.accept.bind(this);
        this.expand = this.expand.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.toggleSub = this.toggleSub.bind(this);
        this.togglePromo = this.togglePromo.bind(this);
        this.togglePromoAll = this.togglePromoAll.bind(this);
        this.loadIdDict = this.loadIdDict.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.setPlayerType = this.setPlayerType.bind(this);
    }

    componentDidMount() {
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

    prepareForSubAssign() {
        //names will be a list of names of all pieces.
        const names = [];
        // subs is this.subs with key:value pairs reversed.
        //frontend uses standard:sub dict, and backend uses
        //sub:standard dict:
        const subs = {};
        Object.entries(this.subs).forEach(([standard, sub]) => {
            if (sub != null) subs[sub] = standard;
        });
        if (this.promos.length > 20) {
            for (let i = 0; i < 20; i++) names.push(this.promos[i]);
        } else {
            for (var p of this.promos) names.push(p);
        }
        for (var s of Object.keys(subs)) {
            if (!names.includes(s)) names.push(s);
        }
        return [names, subs];
    }

    setStandardPromos(idDict) {
        for (const [name1, id1] of Object.entries(standardIds)) {
            for (const [id2, name2] of Object.entries(idDict)) {
                if (name1 === name2 && id1 === id2 && id1 !== "p" && id1 !== "k") {
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
        this.props.loadNewCustom(idDict, this.defs, this.promos);
        this.class_ = this.show ? "customize-window display-on" : "customize-window display-off";
        this.setState({binaryValue: !this.state.binaryValue});
    }

    expand(pieceName, color, rangeType) {
        this.setState({pieceName: pieceName, rangeType: rangeType, color: color});
    }

    toggleSub(sub, standardPiece) {
        this.subs[standardPiece] = sub;
        Object.keys(this.subs).forEach((pieceName) => {
            if (pieceName !== standardPiece && this.subs[pieceName] === sub) this.subs[pieceName] = null;
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

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({binaryValue: !this.state.binaryValue});
    }

    togleMessageModal(boolVal) {
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
        this.props.setPlayer(playerType);
        this.setState({binaryValue: !this.state.binaryValue});
    }

    getComponents(screenCase) {
        return (
            <>
                {this.state.messageModal && (
                    <MessageModal
                        screenCase={screenCase}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                        togleMessageModal={this.togleMessageModal}
                    />
                )}
                {this.state.pieceName && this.state.rangeType && this.state.color && (
                    <DisplayBoardModal
                        screenCase={screenCase}
                        theme={this.state.theme}
                        expand={this.expand}
                        img={this.defs[this.state.pieceName][this.state.color]["img"]}
                        pieceName={this.state.pieceName}
                        rangeType={this.state.rangeType}
                        color={this.state.color}
                        range={this.defs[this.state.pieceName][this.state.color][this.state.rangeType]}
                        location="d4"
                    />
                )}
                <NavBar currentPage="Customize" theme={this.state.theme} unsavedChanges={false}/>
                <div className={this.props.classes.customize}>
                    <div className={this.props.classes.topBar}>
                        <div className={this.props.classes.title}>Customize Game</div>
                        {/* <SearchBar updateSearch={this.updateSearch} /> */}
                    </div>
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
                        classes={{
                            profileHeader: this.props.classes.profileHeader,
                            pieceProfiles: this.props.classes.pieceProfiles,
                            profileGrid: this.props.classes.profileGrid,
                            pieceName: this.props.classes.pieceName,
                            promoCheckbox: this.props.classes.promoCheckbox,
                            subDropdown: this.props.classes.subDropdown,
                        }}
                    />
                    <SubList screenCase={screenCase} subs={this.subs}/>
                    <PromoList screenCase={screenCase} promos={this.promos}/>
                    <div className={}>
                        <CheckBox
                            theme={this.state.theme}
                            clickMethod={this.togglePromoAll}
                            clickValue={null} //this.togglePromoAll takes no arguments
                            checkmarkState={this.state.promoAll}
                            className={this.props.classes.promoAllCheckbox}
                            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            fontSize={fontSizes.medium2}
                            labelText="Promo All"
                        />
                        <PlayerType
                            className={this.props.classes.playAsDropDown}
                            fontSize={fontSizes.medium2}
                            setPlayerType={this.setPlayerType}
                        />
                        <Ok screenCase={screenCase} accept={this.accept}/>
                    </div>
                </div>
            </>
        );
    }

    render() {
        // if (this.promoListUpdate) this.divideList();
        return (
            <>
                <MediaQuery minDeviceWidth={768}>{this.getComponents("desktop")}</MediaQuery>
                {/* <MediaQuery maxDeviceWidth={767}>{this.getComponents("mobile")}</MediaQuery> */}
            </>
        );
    }
}

export default withStyles(styles)(Customize);