import React from "react";
import ReactDOM from "react-dom";
import { PlayAsOption } from "./PlayAsOption";
import { PlayAsButton } from "./PlayAsButton";
import { NavBar } from "../../NavBar/NavBarRegular3";
import { HelpComponent } from "../../Help/HelpComponent";
import { Help } from "../../Help/Help";
import "./PlayAs.css";

export class PlayAs extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { option: null, bValue: true, isHelpModal: false };
        this.navExpanded = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = null;
        this.update = this.update.bind(this);
        this.accept = this.accept.bind(this);
        this.togleNav = this.togleNav.bind(this);
        // this.setHelpText = this.setHelpText.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
    }

    componentDidMount() {
        document.body.className = "play-as-body";
    }

    update(option) {
        if (this.state.option === option) this.setState({ option: null });
        else this.setState({ option: option });
    }

    accept() {
        this.props.setPlayer(this.state.option);
        this.props.loadNew();
        this.props.nextStep();
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal });
    }

    // setHelpText(helpTitle, helpText, hmChildName) {
    //     this.helpTitle = helpTitle;
    //     this.helpText = helpText;
    //     this.hmChildName = hmChildName;
    // }

    setFirstTime(isFirstTime) {
        this.firstTime = isFirstTime;
        if (this.firstTime) this.setState({ isHelpModal: true });
        else this.setState({ bValue: !this.state.bValue });
    }

    render() {
        if (this.state.accepted) {
        }

        return (
            <>
                <HelpComponent
                    pageName="PlayAs"
                    setFirstTime={this.setFirstTime}
                    togleHelpModal={this.togleHelpModal}
                />
                <NavBar
                    currentPage="/NewGame"
                    setHelpText={this.setHelpText}
                    togleHelpModal={this.togleHelpModal}
                    navBarPos="relative"
                    navBarPosTop={0}
                    navBarPosLeft="22.2vw"
                    expandColapseColor="000000"
                />
                <div className="play-as-title">
                    <img
                        src="/Images/play-as.svg"
                        alt="title for picking to play as white, black, or test"
                        style={{ position: "absolute", height: 75, width: 251 }}
                    />
                </div>
                <div className="play-as-options">
                    <PlayAsOption update={this.update} optionName="test" top={0} selected={this.state.option} />
                    <PlayAsOption update={this.update} optionName="W" top={78} selected={this.state.option} />
                    <PlayAsOption update={this.update} optionName="B" top={156} selected={this.state.option} />
                </div>
                <PlayAsButton selected={this.state.option} accept={this.accept} />
                {this.state.isHelpModal && (
                    <Help pageName="PlayAs" firstTime={this.firstTime} posLeft={263} togleHelpModal={this.togleHelpModal} />
                )}
            </>
        );
    }
}

export let test = () => ReactDOM.render(<PlayAs />, document.getElementById("root"));
