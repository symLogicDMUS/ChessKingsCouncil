import React from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {PromoChoice} from "../Components/PromoChoice";
import {AcceptPromo} from "../Components/AcceptPromo";
import {shuffle} from "../../helpers/shuffleArray";
import "../css/AcceptPromo.css";

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

    /**
     * note: once pawn has moved to a backrow square, color has already switched to 
     * the next player before it is promoted. must use what color attribute just was.
     * */
    constructor(props) {
        super(props);
        this.state = {selected: null};
        this.aiPromoComplete = false;
        this.standardPromoNames = ["Queen","Rook","Bishop","Knight"];
        this.standardPromoNameDict = {
            "Queen": "q",
            "Rook": "r",
            "Bishop": "b",
            "Knight": "n",
        };
        this.onSelect = this.onSelect.bind(this);
        this.promote = this.promote.bind(this);
    }

    getPromoChoices() {
        let pieceName = null;
        let pieceImgBase64Str = null;
        let promoChoices = [];
        for (var id of Object.keys(this.props.idDict)) {
            pieceName = this.props.idDict[id];
            if (this.props.promoChoices.includes(pieceName)) {
                pieceImgBase64Str = this.props.pieceDefs[pieceName][this.props.color]["img"];
                promoChoices.push(
                    <PromoChoice  
                      key={id}
                      pieceImgBase64Str={pieceImgBase64Str}
                      selected={this.state.selected} 
                    />
                );
            }
        }

        return promoChoices;
    }

    aiPromoChoices() {
        let pieceName = null;
        let promoChoices = [];
        for (var id of Object.keys(this.props.idDict)) {
            pieceName = this.props.idDict[id];
            if (this.props.promoChoices.includes(pieceName)) {
                promoChoices.push(id);
            }
        }

        return promoChoices;
    }


    getIdNumber(idChoice) {
        /**Pawn promotion means we are adding another piece, 
         * idNumber is how many of that piece for that color 
         * there is now
         **/
        let matches = Object.values(this.props.board).filter(pieceId => 
            pieceId.startsWith( this.props.color + idChoice.toUpperCase()))
        let idNumber = matches.length + 1;
        return idNumber;
    }

    getNewId(idNumber, idChoice) {
        return this.props.color + idChoice.toUpperCase() + idNumber;
    }

    removeHistory() {
        let pawnId = this.props.board[this.pawnLoc];
        delete this.props.jsonRecords.pawnHistories[pawnId];
    }

    replacePawn(pawnLoc, newId) {
        this.props.board[pawnLoc] = newId;
        return;
    }

    updateGameRoot() {
        this.props.updateTurnData()
        this.props.updateSpecialCase("none");
        this.props.update();
    }
 
    promote() {
        let idNumber = this.getIdNumber(this.state.selected);
        let newId = this.getNewId(idNumber, this.state.selected);
        this.removeHistory();
        this.replacePawn(this.pawnLoc, newId);
        this.updateGameRoot();
        this.props.update();
    }

    aiPromote() {
        let ids = this.aiPromoChoices();
        ids = shuffle(ids);
        let idType = ids[0];
        let idNumber = this.getIdNumber(idType);
        let newId = this.getNewId(idNumber, idType);
        this.removeHistory();
        this.replacePawn(this.pawnLoc, newId);
        this.updateGameRoot();
        this.aiPromoComplete = true;
        this.props.update();
    }


    noStandardPieces() {
        for (var pieceName of Object.values(this.props.idDict)) {
            if (this.standardPromoNames.includes(pieceName)) {
                return false;
            }
        }
        return true;
    }

    onSelect(key) {
        this.setState({selected: key});
    }

    render() {

        if (this.props.promoChoices.length === 0 && this.noStandardPieces()) {
            this.props.updateSpecialCase("none");
            this.props.update();
        }

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
                {this.props.color === this.props.aiColor && ! this.aiPromoComplete && (this.aiPromote())}
            </div>
        );
    }
}
