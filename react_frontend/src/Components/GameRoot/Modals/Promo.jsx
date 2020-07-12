import React from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {PromoChoice} from "../Components/PromoChoice";
import {AcceptPromo} from "../Components/AcceptPromo";
import "../css/Promo.css";

const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
};
      
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export class Promo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selected: null};
        this.onSelect = this.onSelect.bind(this);
        this.promote = this.promote.bind(this);
    }

    filterPawn() {
        return Object.keys(this.props.gameroot.idDict).filter(id_ => this.props.gameroot.idDict[id_] != "Pawn");
    }

    filterKing(ids) {
        return ids.filter(id_ => this.props.gameroot.idDict[id_] != "King");
    }

    getPromoChoices() {
        let ids = this.filterPawn();
        if (! this.props.gameroot.isCouncil)
            ids = this.filterKing(ids);
        let pieceName = null;
        let imgName = null;
        let promoChoices = [];
        ids.forEach( id_ => {
            pieceName = this.props.gameroot.idDict[id_];
            imgName = this.props.gameroot.rangeDefs[pieceName][this.props.color]["img"];
            promoChoices.push(<PromoChoice  
                key={id_}
                imgName={imgName}
                selected={this.state.selected}
                />)
        });
        return promoChoices;
    }


    getIdNumber() {
        /**Pawn promotion means we are adding another piece, 
         * idNumber is how many of that piece for that color 
         * there is now
         **/
        let matches = Object.values(this.props.gameroot.board).filter(pieceId => 
            pieceId.startsWith( this.props.color + this.state.selected.toUpperCase()))
        let idNumber = matches.length + 1;
        return idNumber;
    }

    getNewId(idNumber) {
        //note: don't use GameRoot turn attribute because color already switched after pawn move.
        return this.props.color + this.state.selected.toUpperCase() + idNumber;
    }

    replacePawn(pawnLoc, newId) {
        this.props.gameroot.board[pawnLoc] = newId;
        return;
    }

    updateGameRoot() {
        this.props.gameroot.updateBackend().then(([result]) => {
            this.props.gameroot.updateSpecialCase("none");
            this.props.gameroot.emitSpecialChange();
          });
    }
 
    promote() {
        let idNumber = this.getIdNumber();
        let newId = this.getNewId(idNumber);
        this.replacePawn(this.pawnLoc, newId);
        this.updateGameRoot();
        this.props.gameroot.update();
    }

    onSelect(key) {
        this.setState({selected: key})
    }

    render() {

        this.pawnLoc = this.props.pawnLoc;
        let promoChoices = this.getPromoChoices();

        return (
            <div className="promo-modal">
                <div className="img-group">
                    <ScrollMenu 
                     data={promoChoices}
                     selected={this.state.selected}
                     arrowLeft={ArrowLeft}
                     arrowRight={ArrowRight}
                     onSelect={this.onSelect}
                    />
                </div>
                <AcceptPromo promote={this.promote} selected={this.state.selected} />
            </div>
        );
    }
}
