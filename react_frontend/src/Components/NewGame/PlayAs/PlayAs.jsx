import React from "react";
import ReactDOM from "react-dom";
import {PlayAsOption} from "./PlayAsOption";
import { PlayAsButton } from "./PlayAsButton";
import "./PlayAs.css";

export class PlayAs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {option: null};
        this.update = this.update.bind(this);
        this.accept = this.accept.bind(this);
    }

    componentDidMount() {
        document.body.className="play-as-body";
    }

    update(option) {
        if (this.state.option === option)
            this.setState({option: null})
        else
            this.setState({option: option})
    }

    accept() {
        this.props.setPlayer(this.state.option);
        this.props.loadNew()
        this.props.nextStep();
    }

    render() {

        if (this.state.accepted) {

        }

        return (
            <>
                <div className="play-as-title">
                    <img src="/Images/play-as.svg" alt="title for picking to play as white, black, or test" style={{position:"absolute", height:75, width:251}} />
                </div>
                <div className="play-as-options">
                    <PlayAsOption update={this.update} optionName="test"  top={0}   selected={this.state.option}/>
                    <PlayAsOption update={this.update} optionName="W" top={78}  selected={this.state.option}/>
                    <PlayAsOption update={this.update} optionName="B" top={156} selected={this.state.option}/>
                </div>
                <PlayAsButton selected={this.state.option} accept={this.accept} />
            </>
        )
    }
}

export let test = () => ReactDOM.render(<PlayAs />, document.getElementById('root'));