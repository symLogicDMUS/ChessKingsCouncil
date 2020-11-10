import React from "react";
import { Textfit } from "react-textfit";
import { styleObjects } from "./styleObjects";
// import { SearchBar } from "./SearchBar";
import { Close } from "../Reuseables/Close";
import { CloseStyle } from "../Reuseables/CloseStyle";
import { pieceProfilesSizePos } from "./pieceProfilesSizePos";
import { offsetToText } from "../helpers/offsetToText";
import { stepFuncNamesToText } from "../helpers/spanToText";
import { Profile } from "./Profile";
import { DisplayBoardModal } from "./DisplayBoardModal/DisplayBoardModal";
import { CustomizeHeader } from "./CustomizeHeader";
import { LoadDeleteHeader } from "./LoadDeleteHeader";
import "./ProfilesWindow.scss";

export class ProfilesWindow extends React.Component {
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
                    >
                        {LoadDeleteHeader(pieceName, this.props.load, this.props.prepareDelete)}
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
                    >
                        {CustomizeHeader(
                            pieceName,
                            this.props.promos,
                            this.props.newReplacement,
                            this.props.newReplaced,
                            this.props.togleSub,
                            this.props.toglePromo
                        )}
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
                    className="profiles-window"
                    style={pieceProfilesSizePos[this.props.screenCase](this.props.scaler)}
                >
                    <div className="top-bar" style={styleObjects[this.props.screenCase]["topBar"](this.props.scaler)}>
                        <Textfit
                            className="title"
                            mode="multi"
                            max={1000000}
                            style={styleObjects[this.props.screenCase]["title"](this.props.scaler)}
                        >
                            {this.props.title}
                        </Textfit>
                        {/* <SearchBar updateSearch={this.updateSearch} /> */}
                        {this.props.closeIcon && (
                            <Close
                                theme="dark"
                                clickMethod={() => this.props.togleLoadModal(false)}
                                styleObject={CloseStyle[this.props.screenCase](
                                    0.018,
                                    "10%",
                                    "98%",
                                    this.props.scaler
                                )}
                            />
                        )}
                    </div>
                    <div
                        className="profiles"
                        style={styleObjects[this.props.screenCase]["profiles"](this.props.scaler)}
                    >
                        {this.getProfiles()}
                    </div>
                </div>
                {this.getDisplayBoard()}
            </>
        );
    }
}
