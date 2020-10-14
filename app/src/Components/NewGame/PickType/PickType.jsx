import React from "react";
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import { NavBar } from "../../NavBar/NavBarRegular3";
import { HelpComponent } from "../../Help/HelpComponent";
import { Help } from "../../Help/Help";
import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.firstTime = false;
        this.state = { bValue: true, isHelpModal: false };
        this.helpTitle = null;
        this.hmChildName = null;
        //Dictionary of Extra windows to display for help modals. More may be added.
        this.hmChildren = { none: null };
        this.setType = this.setType.bind(this);
        this.setFirstTime = this.setFirstTime.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
    }

    componentDidMount() {
        document.body.className = "pick-type-body";
    }

    setType(gameType) {
        this.props.setType(gameType);
        this.props.nextStep();
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({ bValue: !this.state.bValue });
    }

    togleHelpModal(boolVal) {
        this.setState({ isHelpModal: boolVal });
    }

    setFirstTime(isFirstTime) {
        this.firstTime = isFirstTime;
        if (this.firstTime) this.setState({ isHelpModal: true });
        else this.setState({ bValue: !this.state.bValue });
    }

    render() {
        return (
            <>
                <NavBar
                    currentPage="/NewGame"
                    setHelpText={this.setHelpText}
                    togleHelpModal={this.togleHelpModal}
                    navBarPos="relative"
                    navBarPosTop={0}
                    navBarPosLeft="22.2vw"
                    expandColapseColor="000000"
                />
                <svg viewBox="0 0 1920 1080">
                    <defs>
                        <clipPath id="b">
                            <rect width={1920} height={1080} />
                        </clipPath>
                    </defs>
                    <g id="a" className="a">
                        <Custom setType={this.setType} />
                        <Standard setType={this.setType} />
                        <Council setType={this.setType} />
                        <Title />
                    </g>
                </svg>
                <HelpComponent
                    pageName="PickType"
                    setFirstTime={this.setFirstTime}
                    togleHelpModal={this.togleHelpModal}
                />
                {this.state.isHelpModal && (
                    <Help pageName="PickType" firstTime={this.firstTime} posLeft={263} togleHelpModal={this.togleHelpModal} />
                )}
            </>
        );
    }
}
