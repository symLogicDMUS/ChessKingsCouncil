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
import { CustomizeHeader } from "../NewGame/Customize/Header/CustomizeHeader";
import { LoadDeleteHeader } from "../MyPieces/LoadDeleteHeader";
import "./PieceProfiles.scss";
import {margin, pieceProfilesHeight, profileHeaderHeight} from "../NewGame/Customize/sizeAndPosVariables.jss";

export class PieceProfiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            selectedPiece: null,
            redirect: false,
        };
        // this.displayDefs = null;
        // this.displayBoard = null;
        // this.color = null;
        // this.rangeType = null;
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.searchText = "";
        this.updateSearch = this.updateSearch.bind(this);
        this.applySearchFilter = this.applySearchFilter.bind(this);
    }

    getEmptyProfile() {
        return { W: { spans: [], offsets: [] }, B: { spans: [], offsets: [] } };
    }

    update() {
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    updateSearch(searchText) {
        this.searchText = searchText;
        this.setState({ binaryValue: !this.state.binaryValue });
    }

    applySearchFilter() {
        if (this.searchText !== "") {
            return Object.keys(this.props.defs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(this.searchText)
            );
        } else {
            return Object.keys(this.props.defs);
        }
    }

    getProfiles() {
        let pieceName;
        let profiles = [];
        let pieceNames = this.applySearchFilter();
        if (this.props.context === "load-delete") {
            for (pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        pieceName={pieceName}
                        expand={this.props.expand}
                        defs={this.props.defs}
                        context={this.props.context}
                    >
                        {LoadDeleteHeader({
                            screenCase: this.props.screenCase,
                            pieceName: pieceName,
                            load: this.props.load,
                            prepareDelete: this.props.prepareDelete,
                        })}
                    </Profile>
                );
            }
        } else if (this.props.context === "custom-game") {
            let isCheckmark;
            for (pieceName of pieceNames) {
                isCheckmark = this.props.promos.includes(pieceName);
                profiles.push(
                    <Profile
                        pieceName={pieceName}
                        theme={this.props.theme}
                        expand={this.props.expand}
                        defs={this.props.defs}
                        context={this.props.context}
                    >
                        {CustomizeHeader({
                            pieceName: pieceName,
                            promos: this.props.promos,
                            isCheckmark: isCheckmark,
                            newReplacement: this.props.newReplacement,
                            newReplaced: this.props.newReplaced,
                            toggleSub: this.props.toggleSub,
                            togglePromo: this.props.togglePromo,
                            theme: this.props.theme,
                            classes: {
                                profileHeader: this.props.classes.profileHeader,
                                profileGrid: this.props.classes.profileGrid,
                                pieceName: this.props.classes.pieceName,
                                promoCheckbox: this.props.classes.promoCheckbox,
                                subDropdown: this.props.classes.subDropdown,
                            },
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
                <div className="profiles" style={this.props.styleObjects[this.props.screenCase]["pieceProfiles"]()}>
                    {this.getProfiles()}
                </div>
            </>
        );
    }
}
