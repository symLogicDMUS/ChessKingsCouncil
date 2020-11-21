import React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
// import { defs } from "./tests/testDefs1";
import { DisplayBoardModal } from "../../PieceProfiles/DisplayBoardModal/DisplayBoardModal";
import { PromoList } from "./Bottom/PromoList";
import { SubList } from "./Bottom/SubList";
import { MessageModal } from "../../NavBar/Help/MessageModal";
import { PromoAll } from "./PromoAll";
// import { NameTooltip } from "./Profile/NameTooltip";
// import { SearchBar } from "./SearchBar";
import { PlayAsDropdown as PlayerType } from "./PlayAsDropdown";
import { NavBar } from "../../NavBar/NavBar";
import { getDefs } from "../../../API/getDefs";
import { PieceProfiles } from "../../PieceProfiles/PieceProfiles";
import { standardIds } from "../../../apiHelpers/idAssign/standardIds";
import { initStandardDefs } from "../../../apiHelpers/initStandardDefs";
import { idAssign } from "../../../apiHelpers/idAssign/top/idAssign";
import { Ok } from "./Bottom/CustomiseOk";
import { styleObjects, fonts } from "./CustomizeStyle";
import { CheckBox } from "../../Reuseables/CheckBox";
import MenuItem from "@material-ui/core/MenuItem";
//import "./Customize.jss";
// import "./Customize.scss";

export class Customize extends React.Component {
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
        this.subs = [
            <MenuItem value="None">
                <em>None</em>
            </MenuItem>,
            <MenuItem value="Rook">Rook</MenuItem>,
            <MenuItem value="Bishop">Bishop</MenuItem>,
            <MenuItem value="Knight">Knight</MenuItem>,
            <MenuItem value="Queen">Queen</MenuItem>,
        ];
        this.handleChange = this.handleChange.bind(this);
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
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    expand(pieceName, color, rangeType) {
        this.setState({ pieceName: pieceName, rangeType: rangeType, color: color });
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

    toglePromoAll() {
        this.promoAll = ! this.promoAll
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

    // preConditions() {
    //     /**this method will change the props of 1 or more componts before returning from render*/
    //
    // }

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
                <NavBar currentPage="Customize" theme={this.state.theme} unsavedChanges={false} />
                <div style={styleObjects[screenCase]["customize"]()}>
                    <div style={styleObjects[screenCase]["topBar"]()}>
                        <div style={styleObjects[screenCase]["title"]()}>Customize Game</div>
                        {/* <SearchBar updateSearch={this.updateSearch} /> */}
                    </div>
                    <PieceProfiles
                        screenCase={screenCase}
                        headerType="custom-game"
                        defs={this.defs}
                        theme={this.state.theme}
                        promos={this.promos}
                        newReplacement={this.newReplacement}
                        newReplaced={this.newReplaced}
                        expand={this.expand}
                        togleSub={this.togleSub}
                        toglePromo={this.toglePromo}
                        styleObjects={styleObjects}
                    />
                    <SubList screenCase={screenCase} subs={this.subs} />
                    <PromoList screenCase={screenCase} promos={this.promos} />
                    <div style={styleObjects[screenCase]["bottomBar"]()}>
                        <CheckBox
                            screenCase={screenCase}
                            theme={this.state.theme}
                            styleObject={styleObjects[screenCase]["promoAllCheckbox"](
                                styleObjects[screenCase]["bottomBar"]().height * 0.7
                            )}
                            clickMethod={this.toglePromoAll}
                            clickValue={null} //this.toglePromoAll takes no arguments
                            heightValue={styleObjects[screenCase]["bottomBar"]()}
                            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            fontSize={styleObjects[screenCase]["fontSize1"]()}
                            labelText="Promo All"
                            checkmarkState={this.state.promoAll}
                        />
                        <PlayerType
                            screenCase={screenCase}
                            positionAndWidth={styleObjects[screenCase]["playAsDropdown"](
                                styleObjects[screenCase]["bottomBar"]().height * 0.7
                            )}
                            muiFontSize={fonts.fontSize1}
                            setPlayerType={this.setPlayerType}
                        />
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

// export let test = () => ReactDOM.render(<Customize defs={defs} />, document.getElementById("root"));
