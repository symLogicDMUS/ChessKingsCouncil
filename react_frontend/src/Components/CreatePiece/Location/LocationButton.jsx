import React from "react";
import ReactDOM from "react-dom";
import "./Location.css";

export class LocationButton extends React.Component {

    constructor(props) {
        super(props);
        this.rf = this.props.rf;
        this.select = this.select.bind(this)
    }

    select() {
        this.props.changeLoc(this.rf)
    }

    render()
    {
        let class_ = this.props.selected ? "location-button-selected" : "location-button-normal"
        return(
            <div className={class_} style={{left: this.props.left}} onClick={this.select}> 
                <img src={require(`./${this.rf}.svg`)} className="location-button-label" />
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<LocationButton  />, document.getElementById('root'))