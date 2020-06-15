import React from "react";
import ReactDOM from "react-dom";
import {getOffset} from "../../helpers/getOffset";
import {getOffsetLabel} from "./RangeLabelComponents/getOffsetLabel";
import {getSpanLabel} from "./RangeLabelComponents/getSpanLabel";
import {getPxPos} from "./pxPos";
import "./MySquare.css";

export class MySquare extends React.Component {

    constructor(props) {
        super(props);
        this.pxPos = getPxPos(this.props.rf); 
        this.toglejumpElement = this.toglejumpElement.bind(this);
    }

    toglejumpElement() {
        this.props.togleJump(this.props.rf, getOffset(this.props.rf, this.props.pieceLoc))
    }

    render() {

        if (this.props.isSpan) {
            return(
                <div className="span-element" style={this.pxPos}>
                    {getSpanLabel()}
                </div>
            );
        }

        if (this.props.isJump) {
            return (
                <div className="activated-sqr" style={this.pxPos} onClick={this.toglejumpElement} >
                    {getOffsetLabel( getOffset(this.props.rf, this.props.pieceLoc) )}
                </div>
            );
        }

        return(
            <div className={this.props.class_} style={this.pxPos} onClick={this.toglejumpElement}>
                {this.props.children}
            </div>
        );
        
    }
}

export let test = () => ReactDOM.render(<MySquare />, document.getElementById('root'))