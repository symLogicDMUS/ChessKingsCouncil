import React from "react";
import { Textfit } from "react-textfit";
import { styleObjects } from "./PieceProfileStyle";
// import { SearchBar } from "./SearchBar";
import { Close } from "../Reuseables/Close";
import { CloseStyle } from "../Reuseables/CloseStyle";
import { offsetToText } from "../helpers/offsetToText";
import { stepFuncNamesToText } from "../helpers/spanToText";
import { Profile } from "./Profile";
import { DisplayBoardModal } from "./DisplayBoardModal/DisplayBoardModal";
import { CustomizeHeader } from "./CustomizeHeader";
import { LoadDeleteHeader } from "./LoadDeleteHeader";
import "./PieceProfiles.scss";

export class PieceProfiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            redirect: false,
        };
        this.displayDefs = null;
        this.displayBoard = null;
        this.color = null;
        this.rangeType = null;
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.searchText = "";
        this.expand = this.expand.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.applySearchFilter = this.applySearchFilter.bind(this);
    }

    getEmptyProfile() {
        return { W: { spans: [], offsets: [] }, B: { spans: [], offsets: [] } };
    }

    getDisplayDefs() {
        this.displayDefs = {};
        for (var pieceName of Object.keys(this.props.defs)) {
            if (!this.standards.includes(pieceName)) {
                this.displayDefs[pieceName] = this.getEmptyProfile();
                this.displayDefs[pieceName]["W"]["spans"] = this.getSpans(this.props.defs[pieceName]["W"]);
                this.displayDefs[pieceName]["W"]["offsets"] = this.getOffsets(this.props.defs[pieceName]["W"]);
                this.displayDefs[pieceName]["W"]["img"] = this.props.defs[pieceName]["W"]["img"];
                this.displayDefs[pieceName]["B"]["spans"] = this.getSpans(this.props.defs[pieceName]["B"]);
                this.displayDefs[pieceName]["B"]["offsets"] = this.getOffsets(this.props.defs[pieceName]["B"]);
                this.displayDefs[pieceName]["B"]["img"] = this.props.defs[pieceName]["B"]["img"];
            }
        }
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    expand(piece, color, rangeType) {
        this.pieceName = piece;
        this.color = color;
        this.rangeType = rangeType;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    getSpans(def) {
        if (def.spans.length === 0) {
            return Array(0);
        }
        let spanStrings = [];
        for (var span of def.spans) {
            spanStrings.push(stepFuncNamesToText[span]);
        }
        return spanStrings;
    }

    getOffsets(def) {
        if (def.offsets.length === 0) {
            return Array(0);
        }

        let offsetStrings = [];
        def.offsets.forEach((offset) => {
            offsetStrings.push(offsetToText(offset));
        });
        return offsetStrings;
    }

    getDisplayBoard() {
        if (this.pieceName != null && this.color != null && this.rangeType != null)
            return (
                <DisplayBoardModal
                    def={this.props.defs[this.pieceName][this.color]}
                    rangeType={this.rangeType}
                    color={this.color}
                    pieceName={this.pieceName}
                    expand={this.expand}
                    location="d4"
                />
            );
        else return null;
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    applySearchFilter() {
        if (this.searchText !== "") {
            return Object.keys(this.displayDefs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(this.searchText)
            );
        } else {
            return Object.keys(this.displayDefs);
        }
    }

    getProfiles() {
        let profiles = [];
        this.getDisplayDefs();
        let pieceNames = this.applySearchFilter();
        if (this.props.headerType === "load-delete") {

            for (var pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        screenCase={this.props.screenCase}
                        pieceName={pieceName}
                        expand={this.expand}
                        displayDefs={this.displayDefs}
                        pieceProfilesStyle={this.props.pieceProfilesStyle}
                    >
                        {LoadDeleteHeader({
                            screenCase: this.props.screenCase,
                            pieceName: pieceName,
                            load: this.props.load,
                            prepareDelete: this.props.prepareDelete,
                            pieceProfilesStyle: this.props.pieceProfilesStyle,
                            
                        })}
                    </Profile>
                );
            }
        } else if (this.props.headerType === "custom-game") {

            for (var pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        screenCase={this.props.screenCase}
                        pieceName={pieceName}
                        expand={this.expand}
                        displayDefs={this.displayDefs}
                        pieceProfilesStyle={this.props.pieceProfilesStyle}
                    >
                        {CustomizeHeader({
                            pieceName: pieceName,
                            pieceProfilesStyle: this.props.pieceProfilesStyle,
                            windowHeightAllProfiles: this.props.pieceProfilesStyle.height,
                            screenCase: this.props.screenCase,
                            promos: this.props.promos,
                            newReplacement: this.props.newReplacement,
                            newReplaced: this.props.newReplaced,
                            togleSub: this.props.togleSub,
                            toglePromo: this.props.toglePromo,
                        })}
                    </Profile>
                );
            }
        } else {
            return (
                <div style={{ width: "20%", height: "20%", color: "red" }}>
                    Error: Invalid Header Type in Piece Profiles.
                </div>
            );
        }

        return profiles;
    }

    render() {
        return (
            <>
                <div
                    className="profiles"
                    style={this.props.pieceProfilesStyle}
                >
                    {this.getProfiles()}
                </div>
                {this.getDisplayBoard()}
            </>
        );
    }
}
