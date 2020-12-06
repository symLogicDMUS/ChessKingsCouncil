import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import {PromoChoice} from "./PromoChoice";
import {shuffle} from "../../helpers/shuffleArray";
import {numKings} from "../../helpers/numKings";
import {standardPieceImgStrs} from "../../helpers/standardPieceImgStrs";
import {MuiButton as OkButton} from "../../Reuseables/MuiButton";
import withStyles from "@material-ui/core/styles/withStyles";
import {themes} from "../../styles/themes.jss";
import {ok_button, styles} from "./Promo.jss";
import {ArrowLeft, ArrowRight} from "./HorizontalScrollArrows";

class Promo extends React.Component {
    /**
     * note: once pawn has moved to a backrow square, color has already switched to
     * the next player before it is promoted. must use what color attribute just was.
     * */
    constructor(props) {
        super(props);
        this.state = { promoChoice: null };
        this.aiPromoComplete = false;
        this.standardPromoNames = ["Queen", "Rook", "Bishop", "Knight"];
        this.standardPromoNameDict = {
            Queen: "q",
            Rook: "r",
            Bishop: "b",
            Knight: "n",
        };
        this.onSelect = this.onSelect.bind(this);
        this.promote = this.promote.bind(this);
    }

    getIdNumber(idChoice) {
        /**Pawn promotion means we are adding another piece,
         * idNumber is how many of that piece for that color
         * there is now
         **/
        let matches = Object.values(this.props.board).filter((pieceId) =>
            pieceId.startsWith(this.props.color + idChoice.toUpperCase())
        );
        return matches.length + 1;
    }

    getNewId(idNumber, idChoice) {
        return this.props.color + idChoice.toUpperCase() + idNumber;
    }

    removePawnHistory() {
        let pawnId = this.props.board[this.pawnLoc];
        delete this.props.jsonRecords.pawnHistories[pawnId];
    }

    replacePawnWithPromo(pawnLoc, newId) {
        this.props.board[pawnLoc] = newId;
    }

    updateGameRoot() {
        this.props.updateTurnData();
        this.props.updateSpecialCase("none");
        this.props.triggerRender();
    }

    promote() {
        let idNumber = this.getIdNumber(this.state.promoChoice);
        let newId = this.getNewId(idNumber, this.state.promoChoice);
        this.removePawnHistory();
        this.replacePawnWithPromo(this.pawnLoc, newId);
        this.updateGameRoot();
    }

    aiPromote() {
        let ids = this.aiPromoChoices();
        ids = shuffle(ids);
        let idType = ids[0];
        let idNumber = this.getIdNumber(idType);
        let newId = this.getNewId(idNumber, idType);
        this.removePawnHistory();
        this.replacePawnWithPromo(this.pawnLoc, newId);
        this.aiPromoComplete = true;
        this.updateGameRoot();
    }

    noStandardPieces() {
        for (const pieceName of Object.values(this.props.idDict)) {
            if (this.standardPromoNames.includes(pieceName)) {
                return false;
            }
        }
        return true;
    }

    onSelect(key) {
        this.setState({ promoChoice: key });
    }

    aiPromoChoices() {
        let pieceName = null;
        let promoChoices = [];
        for (const id of Object.keys(this.props.idDict)) {
            pieceName = this.props.idDict[id];
            if (this.props.promoChoices.includes(pieceName)) {
                promoChoices.push(id);
            }
        }

        return promoChoices;
    }

    getPromoChoices() {
        let pieceName = null;
        let pieceImgBase64Str = null;
        let promoChoices = [];

        if (this.props.isCouncil && numKings(this.props.board, this.props.color === 0)) {
            const pieceImgStr = standardPieceImgStrs[`${this.props.color}K-svg`];
            promoChoices.push(
                <PromoChoice
                    key={"K"}
                    pieceImgBase64Str={pieceImgStr}
                    promoChoice={this.state.promoChoice}
                    alt="King"
                />
            );
            return promoChoices;
        }

        for (const id of Object.keys(this.props.idDict)) {
            pieceName = this.props.idDict[id];
            if (this.props.promoChoices.includes(pieceName)) {
                //if (pieceName === "King") pieceImgBase64Str = standardPieceImgStrs[`${this.props.color}K-svg`];
                pieceImgBase64Str = this.props.pieceDefs[pieceName][this.props.color]["img"];
                promoChoices.push(
                    <PromoChoice
                        key={id}
                        pieceImgBase64Str={pieceImgBase64Str}
                        promoChoice={this.state.promoChoice}
                        alt={pieceName}
                    />
                );
            }
        }

        return promoChoices;
    }

    render() {
        if (this.props.promoChoices.length === 0 && this.noStandardPieces()) {
            this.props.updateSpecialCase("none");
        }

        this.pawnLoc = this.props.pawnLoc;
        let promoChoices = this.getPromoChoices();

        return (
            <div className={this.props.classes.promo_modal}>
                <div className={this.props.classes.img_group}>
                    <ScrollMenu
                        data={promoChoices}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        onSelect={this.onSelect}
                        promoChoice={this.state.promoChoice}

                    />
                </div>
                <OkButton
                    text={"ok"}
                    style={ok_button}
                    onClick={this.promote}
                    theme={themes.light2}
                    variant={"contained"}
                    isDisabled={!this.state.promoChoice}
                />
                {this.props.color === this.props.aiColor && !this.aiPromoComplete && this.aiPromote()}
            </div>
        );
    }
}

export default withStyles(styles)(Promo);
