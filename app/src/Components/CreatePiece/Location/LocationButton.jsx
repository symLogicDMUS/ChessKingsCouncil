import React from "react";
import ReactDOM from "react-dom";
import "./Location.scss";

export class LocationButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dir: "grey-labels"}
        this.select = this.select.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    select() {
        this.props.setUnsaved(true);
        this.props.changeLoc(this.props.rf);
    }

    hoverOn() {
        this.setState({dir: "white-labels"});
    }

    hoverOff() {
        this.setState({dir: "grey-labels"});
    }

    render()
    {
        let class_ = this.props.selected ? "location-button-selected" : "location-button-normal"
        return(
            <div className={class_} style={{left: this.props.left}} onClick={this.select} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}> 
                <img src={require(`./${this.state.dir}/${this.props.rf}.svg`)} className="location-button-label" alt="button to change location of piece that creating" />
            </div>
        )
    }
}

export let test = () => ReactDOM.render(<LocationButton  />, document.getElementById('root'))