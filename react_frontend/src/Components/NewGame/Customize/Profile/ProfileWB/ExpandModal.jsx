import React from "react";
import "./ExpandModal.css";

export class ExpandModal extends React.Component {

    constructor(props) {
        super(props);
        //this.class_ = "expand-modal modal-box modal-box-off";
        this.unexpand = this.unexpand.bind(this);
    }

    unexpand() {
        this.props.expand(null, null, null);
    }

    getList() {
        let listValues = []
        this.props.list.forEach(value => {
            listValues.push(<div className="value">{value}</div>)
        });
        return listValues;
    }

    render() {

        return (
            <div className="expand-modal">
                <div className="modal-box">
                    <img src={require("./unexpand.svg")} onClick={this.unexpand} className="unexpand" />
                    <div className="title">
                        {this.props.piece} {this.props.color} {this.props.value}
                    </div>
                    <div className="list">
                        {this.getList()}
                    </div>

                </div>
            </div>
        )
    }
}