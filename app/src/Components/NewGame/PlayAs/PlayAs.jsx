import React from "react";
import ReactDOM from "react-dom";
import { PlayAsOption } from "./PlayAsOption";
import { PlayAsButton } from "./PlayAsButton";
import { NavBar } from "../../NavBar/NavBarRegular3";
import { HelpComponent } from "../../Help/HelpComponent";
import { MessageModal } from "../../Help/MessageModal";
import { Help } from "../../Help/Help";
import "./PlayAs.css";

export class PlayAs extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { option: null, bValue: true, isHelpModal: false, messageModal: false, firstTime: false };
        this.navExpanded = true;
        this.messageTitle = null;
        this.messageText = null;
        this.hmChildName = null;
        this.update = this.update.bind(this);
        this.accept = this.accept.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.setMessageText = this.setMessageText.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
        this.togleMessageModal = this.togleMessageModal.bind(this);
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

    togleMessageModal(boolVal) {
        this.setState({ messageModal: boolVal });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal, firstTime: false });
    }

    setMessageText(helpTitle, helpText) {
        this.messageTitle = helpTitle;
        this.messageText = helpText;
    }

    setFirstTime(firstTime) {
        this.setState({ firstTime: firstTime });
    }

    render() {
        return (
            <>
                <HelpComponent
                    pageName="PlayAs"
                    setFirstTime={this.setFirstTime}
                    togleHelpModal={this.togleHelpModal}
                    fontSize={30}
                    color="#000000"
                />
                <NavBar
                    currentPage="/NewGame"
                    setHelpText={this.setMessageText}
                    togleHelpModal={this.togleMessageModal}
                    navBarPos="relative"
                    navBarPosTop={0}
                    navBarPosLeft="22.2vw"
                    expandColapseColor="000000"
                />
                <div className="play-as-title">
                    <img
                        src="/Images/text-labels/play-as.svg"
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
                {(this.state.isHelpModal || this.state.firstTime) && (
                    <Help
                        pageName="PlayAs"
                        firstTime={this.state.firstTime}
                        posLeft={263}
                        togleHelpModal={this.togleHelpModal}
                    />
                )}
                {this.state.messageModal && (
                    <MessageModal
                        togleMessageModal={this.togleMessageModal}
                        messageTitle={this.messageTitle}
                        messageText={this.messageText}
                    />
                )}
            </>
        );
    }
}

export let test = () => ReactDOM.render(<PlayAs />, document.getElementById("root"));
