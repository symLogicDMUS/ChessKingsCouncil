import React from "react";
import ReactDOM from "react-dom";
import "./MySquare.css";


export class MySquare extends React.Component {
    constructor(props) {
        super(props);
        this.toglejumpElement = this.toglejumpElement.bind(this);
    }

    toglejumpElement() {
        this.props.togleJump(this.props.id_)
    }

    render() {

        if (this.props.isSpan) {
            return(
                <div className="span-element">
                    {this.props.children}
                </div>
            );
        }

        if (this.props.isJump) {
            return (
                <div className="activated-sqr" onClick={this.toglejumpElement} >
                    {this.props.children}
                </div>
            );
        }

        return(
            <div className={this.props.class_} onClick={this.toglejumpElement}>
                {this.props.children}
            </div>
        );
        
    }
}

export let test = () => ReactDOM.render(<MySquare />, document.getElementById('root'))