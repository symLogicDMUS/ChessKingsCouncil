import React from "react";
import ReactDOM from "react-dom";
import { Profile } from "./Profile/Profile";
import {defs} from "./tests/testDefs1";
import { ExpandModal } from "./Profile/ProfileWB/ExpandModal";
import {getColorName} from "../../helpers/getColorName";
import {NameTooltip} from "./Profile/NameTooltip";
import {Ok} from "./Bottom/Ok";
import "./Profile/Profile.css";
import "./Profile/ProfileWB/ProfileWB.css";
import "./Customize.css";
import "./Bottom/Bottom.css";
import "./Bottom/Promos.css";
import "./Bottom/Subs.css";


export class Customize extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {binaryValue: true}
        this.promos = [];
        this.expandModals = [];
        this.expandPiece = null;
        this.expandValue = null;
        this.expandColor = null;
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
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
        console.log(this.defs)
        console.log(this.displayDefs)
        this.subs = {
            "Rook":null,
            "Bishop":null,
            "Queen":null,
            "Knight":null
        }
        this.accept = this.accept.bind(this);
        this.togleSub = this.togleSub.bind(this);
        this.toglePromo = this.toglePromo.bind(this);
        this.loadNewCustom = this.loadNewCustom.bind(this);
        this.expand = this.expand.bind(this);
        this.nameTooltip = this.nameTooltip.bind(this);
    }

    getSpans(def) {

        if (def.spans.length === 0) {
            return Array(0);
        }

        let spanStrings = [];
        for (var span of def.spans) {
            spanStrings.push(this.getSpan(span))
        }
        spanStrings[spanStrings.length - 1] = spanStrings[spanStrings.length - 1].split(",")[0]
        return spanStrings;
    }
    
    getSpan(step_func) {

        const reInt = /([0-9]+)d/;
        let integer = Number(step_func.match(reInt)[1]);
        let span = null;
        switch(integer) {
            case 0:
                span = "right, "
                break;
            case 45:
                span = "upper-right, "
                break;
            case 90:
                span = "up, "
                break;
            case 135:
                span = "upper-left, "
                break;
            case 180:
                span = "left, "
                break;
            case 225:
                span = "lower-left, "
                break;
            case 270:
                span = "down, "
                break;
            case 315:
                span = "lower-right, "
                break;
            default:
                console.log("no match");
                break;
        }
    
        return span;
    
    }
    
    getOffsets(def) {

        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = []
        def.offsets.forEach(offset => {
            offsetStrings.push(this.xOffset(offset[0]) + this.yOffset(offset[1]));
        })
        offsetStrings[offsetStrings.length - 1] = offsetStrings[offsetStrings.length - 1].split(",")[0]
        return offsetStrings;
    }

    xOffset(x) {
        if (x < 0)
            return `left ${Math.abs(Math.abs(x))} `
        else
            return `right ${x} `
    }

    yOffset(y) {
        if (y < 0)
            return `down ${Math.abs(y)}, `
        else
            return `up ${y}, `
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

    accept() {
        
        this.loadNewCustom().then( ([idDict]) => this.props.loadNewCustom(idDict));
        this.class_ = this.show ? "customize-window display-on" : "customize-window display-off";
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    expand(piece, color, value) {
        this.expandPiece = piece;
        this.expandValue = value;
        this.expandColor = color;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    getModals() {
        if (this.expandPiece != null && this.expandValue != null && this.expandColor != null) {
            if (this.expandValue === "color") {
                return <ExpandModal piece={this.expandPiece} color={this.expandColor} value={this.expandValue} expand={this.expand}
                        list={[`color: ${getColorName(this.expandColor)}`, 
                               <img src={
                                require(`../../MyPieces/Images/${this.defs[this.expandPiece][this.expandColor]["img"]}`)}
                                style={{width: "280px", height: "280px"}} />]} 
                                />
            }
            else {
                return <ExpandModal piece={this.expandPiece} color={this.expandColor} value={this.expandValue} 
                list={this.defs[this.expandPiece][this.expandColor][this.expandValue]} expand={this.expand} />
            }
        }
        else
            return <div>{null}</div>
    }

    togleSub(sub, standardPiece) {
        this.subs[standardPiece] = sub;
        Object.keys(this.subs).forEach( pieceName => {

            if (pieceName != standardPiece && this.subs[pieceName] === sub)
                this.subs[pieceName] = null;

        });
        this.newReplacement = sub;
        this.newReplaced = standardPiece; 
        this.setState({binaryValue: ! this.state.binaryValue})
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
    
    toglePromo(pieceName) {
        if (this.promos.includes(pieceName)) {
            const index = this.promos.indexOf(pieceName)
            if (index > -1)
                this.promos.splice(index, 1)
        }
        else
            this.promos.push(pieceName);
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

    loadNewCustom() {
        let [names, subs] = this.preparePayload();
        return Promise.all([this.assignIds(names, subs)]);
    }

    getPromos() {
        let promoDisplays = []
        for (var pieceName of this.promos) {
            promoDisplays.push(<div>{pieceName}<br /></div>)
        }
        return promoDisplays;
    }
    
    getProfiles() {
        let profiles = []
        for (var pieceName of Object.keys(this.defs)) {
            profiles.push(
                <Profile 
                  newReplacement={this.newReplacement} 
                  newReplaced={this.newReplaced}
                  nameTooltip={this.nameTooltip}
                  togleSub={this.togleSub} 
                  toglePromo={this.toglePromo} 
                  pieceName={pieceName}
                  expand={this.expand}
                  displayDefs={this.displayDefs}
                />
            );
        }
        return profiles;
    }

    render() {

        return(
            <>
                <div className="customise-window">
                    <div className="piece-profiles">
                        {this.getProfiles()}
                    </div>
                    <div className="bottom-bar">
                        <div className="subs-header">Subs</div>
                        <div className="rook-label">Rook: </div>
                        <div className="rook-value">{this.subs["Rook"]}</div>
                        <div className="bishop-label">Bishop: </div>
                        <div className="bishop-value">{this.subs["Bishop"]}</div>
                        <div className="knight-label">Knight: </div>
                        <div className="knight-value">{this.subs["Knight"]}</div>
                        <div className="queen-label">Queen: </div>
                        <div className="queen-value">{this.subs["Queen"]}</div>
                        <div className="promo-label">Pawn Promotions:</div>
                        <div className="promo-list">{this.getPromos()}</div>
                    </div>
                </div>
                {this.isTooltip && (<NameTooltip clientX={this.clientX} clientY={this.clientY} name={this.nameDisp} />) }
                <Ok accept={this.accept} />
                {this.getModals()}
            </>

        )
    }
}


export let test = () => ReactDOM.render(<Customize defs={defs} />, document.getElementById('root'))