import React from "react";
import ReactDOM from "react-dom";
import {PlayAsOption} from "./PlayAsOption";
import { PlayAsButton } from "./PlayAsButton";
import {NavBar} from "../../NavBar/NavBarRegular";
import {NavExpand} from "../../NavBar/NavExpand";
import {NavColapse} from "../../NavBar/NavColapse";
import "./PlayAs.css";

export class PlayAs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {option: null, bValue: true};
        this.navExpanded = true;
        this.update = this.update.bind(this);
        this.accept = this.accept.bind(this);
        this.togleNav = this.togleNav.bind(this);
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

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({bValue: ! this.state.bValue});
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
                {this.navExpanded && (<NavBar navBarPosTop={0} 
                                        navBarPosLeft={480} 
                                        backgroundColor="#000000" 
                                        iconColor="969696" 
                                        iconColorHover="ffffff" 
                                        backgroundColorSelected="#3d3d3d" 
                                        border="1px solid #515151" />)}
                {this.navExpanded && (<NavColapse left={1080}  
                                            top={-1} 
                                            togleNav={this.togleNav} 
                                            backgroundColor="#000000" 
                                            iconColor="b6b6b6" 
                                            border="1px solid #515151" />)}
                {! this.navExpanded && (<NavExpand left={1080}  
                                             top={-1} 
                                             togleNav={this.togleNav} 
                                             backgroundColor="#000000" 
                                             iconColor="b6b6b6" 
                                             border="1px solid #515151" />)}
            </>
        )
    }
}

export let test = () => ReactDOM.render(<PlayAs />, document.getElementById('root'));