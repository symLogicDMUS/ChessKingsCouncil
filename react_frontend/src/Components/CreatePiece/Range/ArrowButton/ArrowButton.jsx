import React from "react";
import ReactDOM from "react-dom";
import "../Range.css";

export class ArrowButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.id = this.props.id_;
        this.pos = this.props.pos;
        this.class_ = "button-normal";
        this.togleSpan = this.togleSpan.bind(this);
    }

    togleSpan() {
        this.props.togleSpan(this.id);
        this.props.setUnsaved(true);
        this.props.update();
    }
    render() {

            if (this.props.isActive)
                this.class_ = "button-selected"
            else
                this.class_ = "button-normal";

            return (
                <div onClick={this.togleSpan} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} style={this.pos} className={this.class_}>
                    <img src={require(`./${this.props.image}`)} className="vector" />
                </div>
            );
    }
}

export let test = () => ReactDOM.render(<ArrowButton 
    id_={"135d"}  
    pos={{position:"absolute", top: "0px", left:"0px"}} 
    image="upLeft.svg" 
    />, 
    document.getElementById('root') 
)