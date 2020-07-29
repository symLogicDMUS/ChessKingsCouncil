import React from "react";
import ReactDOM from "react-dom";
import { Profile } from "./Profile/Profile";
import {defs} from "./tests/testDefs1";
import { ExpandModal } from "./Profile/ProfileWB/ExpandModal";
import {NameTooltip} from "./Profile/NameTooltip";
import {PromoList} from "./Bottom/PromoList";
import {SubList} from "./Bottom/SubList";
import {PromoAll} from "./PromoAll";
import {spanToText} from "../../helpers/spanToText";
import {offsetToText} from "../../helpers/offsetToText";
import {Ok} from "./Bottom/CustomiseOk";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpModal} from "../../Help/HelpModal";
import {HelpText} from "./HelpText";
import {NewGamePlayerType as PlayerType} from "./NewGamePlayerType";
import { SearchBar } from "./SearchBar";
import "./Customize.css";


export class Customize extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {binaryValue: true, isHelpModal: false}
        this.promos = [];
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
        this.promoListUpdate = false;
        this.expandModals = [];
        this.playerType = "test";
        this.pieceName = null; //for expand modal
        this.rangeType = null; //for expand modal
        this.color = null; //for expand modal
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = "none";
        this.hmChildren = {"none":null};
        this.searchText = "";
        this.isTooltip = false;
        this.nameDisp = null;
        this.clientX = 0;
        this.clientY = 0;
        this.defs = JSON.parse(JSON.stringify(this.props.defs));
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        for (var name of this.standards) {
            delete this.defs[name]
        }
        this.displayDefs = JSON.parse(JSON.stringify(this.defs));
        Object.keys(this.displayDefs).forEach(pieceName => {
            this.displayDefs[pieceName]["W"]["spans"] = this.getSpans(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["W"])
            this.displayDefs[pieceName]["B"]["spans"] = this.getSpans(this.displayDefs[pieceName]["B"])
            this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsets(this.displayDefs[pieceName]["B"])
        })
        this.subs = {
            "Rook":null,
            "Bishop":null,
            "Queen":null,
            "Knight":null
        }
        this.accept = this.accept.bind(this);
        this.expand = this.expand.bind(this);
        this.togleSub = this.togleSub.bind(this);
        this.toglePromo = this.toglePromo.bind(this);
        this.toglePromoAll = this.toglePromoAll.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
        this.nameTooltip = this.nameTooltip.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.setPlayerType = this.setPlayerType.bind(this);
    }

    getSpans(def) {

        if (def.spans.length === 0) {
            return Array(0);
        }

        let spanStrings = [];
        for (var span of def.spans) {
            spanStrings.push(spanToText(span))
        }
        return spanStrings;
    }
        
    getOffsets(def) {

        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = []
        def.offsets.forEach(offset => {
            offsetStrings.push(offsetToText(offset));
        })
        return offsetStrings;
    }

    nameTooltip(e, isTooltip, name) {
        this.clientX = e.clientX;
        this.clientY = e.clientY;
        this.isTooltip = isTooltip;
        if (this.isTooltip)
            this.nameDisp = name;
        else
            this.nameDisp = null;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    async assignIds(names, subs) {
        let response = await fetch('/assign_ids', {
            method:'POST',
            body:JSON.stringify({"names":names, "subs":subs})
        });
        let idDict = await response.json();
        return idDict;
    }

    preparePayload() {
        let names = [];
        let subs = {};
        Object.entries(this.subs).forEach( ([standard, sub]) => {
            if (sub != null)
                subs[sub] = standard;
        });
        for (var p of this.promos) 
            names.push(p)
        for (var s of Object.keys(subs)) {
            if (! names.includes(s)) 
                names.push(s)
        }
        return [names, subs];
    }

    loadNewCustom() {
        let [names, subs] = this.preparePayload();
        return Promise.all([this.assignIds(names, subs)]);
    }

    accept() {
        this.loadNewCustom().then( ([idDict]) => {
            this.props.loadNewCustom(idDict, this.promos);
            this.class_ = this.show ? "customize-window display-on" : "customize-window display-off";
            this.setState({binaryValue: ! this.state.binaryValue});
        });
    }

    expand(pieceName, color, rangeType) {
        this.pieceName = pieceName;
        this.rangeType = rangeType;
        this.color = color;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    getModals() {
        if (this.pieceName != null && this.rangeType != null && this.color != null) {
                return <ExpandModal def={this.defs[this.pieceName][this.color]}
                                    pieceName={this.pieceName} 
                                    rangeType={this.rangeType} 
                                    color={this.color} 
                                    expand={this.expand} 
                                    location="d4"
                                    />
        }
        else
            return <div>{null}</div>
    }

    togleSub(sub, standardPiece) {
        this.subs[standardPiece] = sub;
        Object.keys(this.subs).forEach( pieceName => {

            if (pieceName !== standardPiece && this.subs[pieceName] === sub)
                this.subs[pieceName] = null;

        });
        this.newReplacement = sub;
        this.newReplaced = standardPiece; 
        this.setState({binaryValue: ! this.state.binaryValue})
    }
    
    toglePromo(pieceName) {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName);
            if (index > -1)
                this.promos.splice(index, 1)
        }
        else
            this.promos.push(pieceName);
        this.promoListUpdate = true;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    toglePromoAll(promoAll) {

        if (promoAll) {
            for (var pieceName of Object.keys(this.defs)) {
                if (! this.promos.includes(pieceName)) {
                    this.promos.push(pieceName);
                }
            }
        }

        else {
            this.promos = [];
        }
        this.promoListUpdate = true;
        this.setState({binaryValue: ! this.state.binaryValue})
    }
    
    divideList() {
        this.aboveView = [];
        this.inView = [];
        this.belowView = [];
        let remaining = 0;
        if (this.promos.length > 5) {
            remaining = this.promos.length - 5;
            let lenTop = Math.floor(remaining / 2);
            for (let i = 0; i < lenTop; i++) {
                this.aboveView.push(this.promos[i])
            }
            let current = lenTop;
            for (let i = 0; i < 5; i++) {
                this.inView.push(this.promos[current]);
                current++;
            }
            for (let i = current; i < this.promos.length; i++) {
                this.belowView.push(this.promos[i]);       
            }
        }
        else 
            this.inView = this.promos;

        this.promoListUpdate = false; 

    }
    
    getHelpModalChild() {
        return this.hmChildren[this.hmChildName];
    }

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;        
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    applySearchFilter() {
        if (this.searchText !== "")
            return Object.keys(this.defs).filter(pieceName => pieceName.toLowerCase().startsWith(this.searchText));
        else
            return Object.keys(this.defs);
    }

     setPlayerType(playerType) {
        this.props.setPlayer(playerType);
        this.setState({binaryValue: ! this.state.binaryValue});
    }

    getProfiles() {
        let pieceNames = this.applySearchFilter();
        let profiles = [];
        for (var pieceName of pieceNames) {
            profiles.push(
                <Profile 
                  newReplacement={this.newReplacement} 
                  newReplaced={this.newReplaced}
                  nameTooltip={this.nameTooltip}
                  togleSub={this.togleSub} 
                  toglePromo={this.toglePromo} 
                  expand={this.expand}
                  pieceName={pieceName}
                  promos={this.promos}
                  displayDefs={this.displayDefs}
                />
            );
        }
        return profiles;
    }

    render() {

        if (this.promoListUpdate)
            this.divideList();

        return(
            <>  
                <div className="new-game-customize-window">
                    <div className="new-game-customize-top-bar">
                        <div className="new-game-customize-top-bar-title">
                            Customize
                        </div>
                        <HelpComponent togleHelpModal={this.togleHelpModal} 
                                       setHelpText={this.setHelpText}
                                       helpTitle="Customizing a New Game" 
                                       helpText={HelpText}
                                       hmChildName="none"
                                       style={{ position:"absolute",
                                                height:15,
                                                width:15,
                                                left:200,
                                                top:18
                                       }}
                                       highlighted="/Images/question-mark-0cc.svg"
                                       normal="/Images/question-mark-a9a9a9.svg"
                        />
                        <PlayerType setPlayerType={this.setPlayerType} />
                        <SearchBar updateSearch={this.updateSearch} />
                        <PromoAll toglePromoAll={this.toglePromoAll} />
                    </div>
                    <div className="new-game-piece-profiles">
                        {this.getProfiles()}
                    </div>
                    <div className="new-game-bottom-bar">
                        <SubList subs={this.subs} />
                        <div className="new-game-promo-label">Pawn Promotions</div>
                        <div className="new-game-promo-list-container">
                            <PromoList promos={this.promos}
                                       aboveView={this.aboveView} 
                                       inView={this.inView}
                                       belowView={this.belowView}
                            />
                        </div>
                    </div>
                </div>
                {this.isTooltip && (<NameTooltip clientX={this.clientX} clientY={this.clientY} name={this.nameDisp} />) }
                <Ok accept={this.accept} />
                {this.getModals()}
                {this.state.isHelpModal && (
                    <HelpModal helpTitle={this.helpTitle} helpText={this.helpText} togleHelpModal={this.togleHelpModal}>
                        {this.getHelpModalChild()}
                    </HelpModal> 
                )}
            </>

        )
    }
}


export let test = () => ReactDOM.render(<Customize defs={defs} />, document.getElementById('root'))