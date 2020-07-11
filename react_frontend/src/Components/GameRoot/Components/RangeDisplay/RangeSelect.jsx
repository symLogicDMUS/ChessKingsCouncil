import React from "react";
import "../../css/RangeSelect.css";

export class RangeSelect extends React.Component {

    constructor(props) {
        super(props);
        this.selectedItem = "none";
        this.pieceOptions = this.getPieceOptions();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.selectedItem = e.target.value;
        this.props.updatePrh(this.selectedItem);
        this.props.update();
    }

    getPieceOptions() {

        let pieceName = null;
        let pieceOptions = [];

        pieceOptions.push(<option value="none">None</option>);

        for (var pieceId of Object.keys(this.props.allRanges)) {
            pieceName=this.props.idDict[pieceId[1].toLowerCase()];
            pieceOptions.push(
                <option value={pieceId}>
                    {pieceId} {pieceName}
                </option>
            )
        }

        return pieceOptions;
    }

    render() {

        return (
            <div className="range-select">
                <div className="label-container">
                    Show available moves
                </div>
                <div className="dropdown-container">
                    <select id="range-select-dropdown" className="range-select-dropdown" onChange={this.handleChange} value={this.selectedItem}>
                        {this.getPieceOptions()}
                    </select>              
                </div>
            </div>
        );
    }

}