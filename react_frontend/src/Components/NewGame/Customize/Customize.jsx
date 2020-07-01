import React from "react";
import ReactDOM from "react-dom";
import { Profile } from "./Profile/Profile";
import {defs} from "./testDefs1";
import { ExpandModal } from "./Profile/ProfileWB/ExpandModal";
import {Ok} from "./Ok";
import "./Profile/Profile.css";
import "./Profile/ProfileWB/ProfileWB.css";
import "./Customize.css";
import "./BottomBar.css";
import "./Promos.css";
import "./Subs.css";


export class Customize extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {binaryValue: true}
        this.promos = [];
        this.expandModals = [];
        this.expandPiece = null;
        this.expandValue = null;
        this.expandColor = null;
        this.defs = {};
        this.newReplacement = null;
        this.newReplaced = null;
        this.show = true;
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        Object.keys(this.props.defs).forEach(pieceName => {
            if (! this.standards.includes(pieceName))
                this.defs[pieceName] = this.props.defs[pieceName]
        })
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
    }

    /*TODO: create an Ok button and pass it accept as a prop */
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
        if (this.expandPiece != null && this.expandValue != null && this.expandColor != null)
            return <ExpandModal piece={this.expandPiece} color={this.expandColor} value={this.expandValue} list={this.defs[this.expandPiece][this.expandColor][this.expandValue]} expand={this.expand} />
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
        for (var p in this.promos) 
            names.push(p)
        for (var s in Object.keys(subs)) {
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
                  togleSub={this.togleSub} 
                  toglePromo={this.toglePromo} 
                  pieceName={pieceName}
                  expand={this.expand}
                  defs={this.defs}
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
                {/* <Ok accept={this.accept} /> */}
                </div>
            {this.getModals()}
            </>

        )
    }
}


export let test = () => ReactDOM.render(<Customize defs={defs} />, document.getElementById('root'))