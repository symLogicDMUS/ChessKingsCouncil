import React from "react";
import ReactDOM from "react-dom";
import "../Range.css";

export class ArrowButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.id = this.props.id_;
        this.pos = this.props.pos;
        // this.state = {selected: false}
        this.class_ = "button-normal";
        this.togleSpan = this.togleSpan.bind(this);
    }

    togleSpan() {
        // this.setState({selected: ! this.state.selected })
        //this.class_ = this.state.selected ? "button-normal" : "button-selected";
        this.props.togleDisplaySpan(this.id);
    }

    render() {

            if (this.props.isActive)
                this.class_ = "button-selected";
            else
                this.class_ = "button-normal";

            return (
                <div onClick={this.togleSpan} style={this.pos} className={this.class_}>
                    {this.props.image}
                </div>
            );
    }
}

export let test = () => ReactDOM.render(<ArrowButton 
    id_={"135d"}  
    pos={{position:"absolute", top: "0px", left:"0px"}} 
    image={<img src={require("./upLeft.svg")} className="vector" />} 
    />, 
    document.getElementById('root') 
)