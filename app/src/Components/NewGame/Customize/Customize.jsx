import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import {defs} from "./tests/testDefs1";
import {styleObjects} from "./CustomizeStyle";
import {DisplayBoardModal} from "../../PieceProfiles/DisplayBoardModal/DisplayBoardModal";
import {PromoList} from "./Bottom/PromoList";
import {SubList} from "./Bottom/SubList";
import {MessageModal} from "../../NavBar/Help/MessageModal";
import {PromoAll} from "./PromoAll";
// import { NameTooltip } from "./Profile/NameTooltip";
// import { SearchBar } from "./SearchBar";
import {NewGamePlayerType as PlayerType} from "./NewGamePlayerType";
import {NavBar} from "../../NavBar/NavBar";
import {getDefs} from "../../../API/getDefs";
import {PieceProfiles} from "../../PieceProfiles/PieceProfiles";
import {standardIds} from "../../../apiHelpers/idAssign/standardIds";
import {initStandardDefs} from "../../../apiHelpers/initStandardDefs";
import {idAssign} from "../../../apiHelpers/idAssign/top/idAssign";
import {Ok} from "./Bottom/CustomiseOk";
import "./Customize.scss";

export class Customize extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { binaryValue: true, theme: "dark" };
        this.defs = {};
        this.promos = [];
        this.expandModals = [];
        this.playerType = "test";
        this.pieceName = null;
        this.rangeType = null;
        this.color = null;
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = { none: null };
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
        this.togleSub = this.togleSub.bind(this);
        this.toglePromo = this.toglePromo.bind(this);
        this.toglePromoAll = this.toglePromoAll.bind(this);
        this.loadNewCustom = this.loadIdDict.bind(this);
        // this.nameTooltip = this.nameTooltip.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.setPlayerType = this.setPlayerType.bind(this);
    }

    componentDidMount() {
        getDefs().then(([defs]) => {
            if (!defs) defs = {};
            this.defs = initStandardDefs(defs);
            this.setState({ binaryValue: !this.state.binaryValue });
        });
    }

    prepareForSubAssign() {
        //names will be a list of names of all pieces.
        var names = [];
        // subs is this.subs with key:value pairs reversed.
        //frontend uses standard:sub dict, and backend uses
        //sub:standard dict:
        var subs = {};
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
        for (var [name1, id1] of Object.entries(standardIds)) {
            for (var [id2, name2] of Object.entries(idDict)) {
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
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    expand(pieceName, color, rangeType) {
        this.pieceName = pieceName;
        this.rangeType = rangeType;
        this.color = color;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    getModals() {
        if (this.pieceName != null && this.rangeType != null && this.color != null) {
            return (
                <DisplayBoardModal
                    def={this.defs[this.pieceName][this.color]}
                    pieceName={this.pieceName}
                    rangeType={this.rangeType}
                    color={this.color}
                    expand={this.expand}
                    location="d4"
                />
            );
        } else return <div>{null}</div>;
    }

    togleSub(sub, standardPiece) {
        this.subs[standardPiece] = sub;
        Object.keys(this.subs).forEach((pieceName) => {
            if (pieceName !== standardPiece && this.subs[pieceName] === sub) this.subs[pieceName] = null;
        });
        this.newReplacement = sub;
        this.newReplaced = standardPiece;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    toglePromo(pieceName) {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName);
            if (index > -1) this.promos.splice(index, 1);
        } else this.promos.push(pieceName);
        // this.promoListUpdate = true;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    toglePromoAll(promoAll) {
        if (promoAll) {
            for (var pieceName of Object.keys(this.defs)) {
                if (!this.promos.includes(pieceName)) {
                    this.promos.push(pieceName);
                }
            }
        } else {
            this.promos = [];
        }
        // this.promoListUpdate = true;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
        this.setState({ messageModal: true });
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    setPlayerType(playerType) {
        this.props.setPlayer(playerType);
        this.setState({ binaryValue: !this.state.binaryValue });
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
                {/* {this.getModals()} */}
                <NavBar currentPage="Customize" theme={this.state.theme} unsaved={false} />
                <div className="customize" style={styleObjects[screenCase]["customize"]()}>
                    <div className="customize-topbar" style={styleObjects[screenCase]["topBar"]()}>
                        <div className="customize-title">Customize Game</div>
                        {/* <SearchBar updateSearch={this.updateSearch} /> */}
                    </div>
                    <PieceProfiles
                        screenCase={screenCase}
                        headerType="custom-game"
                        defs={this.defs}
                        promos={this.promos}
                        newReplacement={this.newReplacement}
                        newReplaced={this.newReplaced}
                        togleSub={this.togleSub}
                        toglePromo={this.toglePromo}
                        styleObjects={styleObjects}
                    />
                    <SubList screenCase={screenCase} subs={this.subs} />
                    <PromoList screenCase={screenCase} promos={this.promos} />
                    <div className="customize-bottom-bar" style={styleObjects[screenCase]["bottomBar"]()}>
                        <PromoAll screenCase={screenCase} toglePromoAll={this.toglePromoAll} />
                        <PlayerType screenCase={screenCase} setPlayerType={this.setPlayerType} />
                        <Ok screenCase={screenCase} accept={this.accept} />
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

export let test = () => ReactDOM.render(<Customize defs={defs} />, document.getElementById("root"));
