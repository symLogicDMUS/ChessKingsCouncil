
import React from "react";
import "./ExpandModal.css";

export class ExpandModal extends React.Component {

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
        return <div className="new-game-expand-modal-list-value2">{this.props.list}</div>
        }

        let listValues = []
        this.props.list.forEach(value => {
            listValues.push(<div className="new-game-expand-modal-list-value">{value}</div>)
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
            <div className="new-game-expand-modal">
                <div className="new-game-expand-modal-window">
                    <img src="/Images/unexpand.svg" onClick={this.unexpand} className="new-game-modal-window-unexpand" />
                    <div className="new-game-expand-modal-window-title" onMouseEnter={() => this.togleTooltip(true)} onMouseLeave={() => this.togleTooltip(false)} >
                        {this.getTitle()}
                    </div>
                    <div className="new-game-expand-modal-list">
                        {this.getList()}
                    </div>
                </div>
                {this.state.tooltip && 
                      (<div className="new-game-tooltip">{this.props.piece} {this.props.color} {this.props.value}</div>)
                }
            </div>
        )
    }
}