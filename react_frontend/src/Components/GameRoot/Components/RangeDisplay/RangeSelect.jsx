import React from "react";
import "./RangeDisplay.css";

export class RangeSelect extends React.Component {

    constructor(props) {
        super(props);
        this.selectedItem = "none";
        this.pieceOptions = this.getPieceOptions();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        /*reset after new move.*/
        if (this.props.range !== prevProps.range) {
            this.selectedItem = "none";
        }
    }

    handleChange(e) {
        this.selectedItem = e.target.value;
        this.props.updatePrh(this.selectedItem);
        this.props.update();
    }

    getPieceOptions() {
        let basicId  = null;
        let pieceName = null;
        let color = null;
        let img_ = null;
        let pieceOptions = [];
        pieceOptions.push(<option value="none">None</option>)
        for (var pieceId of Object.keys(this.props.ranges)) {
            pieceName=this.props.idDict[pieceId[1].toLowerCase()]
            pieceOptions.push(
                <option value={pieceId}>
                    {pieceId} {pieceName}
                </option>
            );
        }
        return pieceOptions;
    }

    render() {

        return (
            <select id="range-select" className="range-select-dropdown" onChange={this.handleChange} value={this.selectedItem}>
                {this.getPieceOptions()}
            </select>
        );
    }

}