
import React from "react";
import "./CreatePieceExpandModal.css";

export class CreatePieceExpandModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tooltip: false};
        this.togleTooltip = this.togleTooltip.bind(this);
        this.unexpand = this.unexpand.bind(this);
    }

    unexpand() {
        this.props.expand(null, null, null);
    }

    getList() {

        if (this.props.value === "color") {
            return <div className="created-piece-value2">{this.props.list}</div>
        }

        let listValues = []
        this.props.list.forEach(value => {
            listValues.push(<div className="created-piece-value">{value}</div>)
        });
        return listValues;
    }

    getTitle() {
        if (this.props.value === "color")
            return this.props.piece
        else
            return this.props.piece +  " " + this.props.color + " " + this.props.value;

    }

    togleTooltip(value) {
        this.setState({tooltip: value})
    }

    render() {

        return (
            <div className="created-piece-expand-modal">
                <div className="created-piece-modal-box">
                    <img src="/Images/unexpand.svg" onClick={this.unexpand} className="created-piece-unexpand" />
                    <div className="created-piece-title" onMouseEnter={() => this.togleTooltip(true)} onMouseLeave={() => this.togleTooltip(false)} >
                        {this.getTitle()}
                    </div>
                    <div className="created-piece-list">
                        {this.getList()}
                    </div>
                </div>
                {this.state.tooltip && 
                      (<div className="created-piece-tooltip">{this.props.piece} {this.props.color} {this.props.value}</div>)
                }
            </div>
        )
    }
}