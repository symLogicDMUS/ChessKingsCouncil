import React from "react"
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import {NavBar} from "../../NavBar/NavBarRegular";
import {NavExpand} from "../../NavBar/NavExpand";
import {NavColapse} from "../../NavBar/NavColapse";
import {HelpComponent} from "../../Help/HelpComponent";
import {HelpText} from "./HelpText";
import {HelpModal} from "../../Help/HelpModal";
import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true, isHelpModal: false};
        this.navExpanded = true;
        this.helpTitle = null;
        this.helpText = null;
        this.hmChildName = null;
        //Dictionary of Extra windows to display for help modals. More may be added.
        this.hmChildren = {"none":null} 
        this.setType = this.setType.bind(this);
        this.togleNav = this.togleNav.bind(this);
        this.setHelpText = this.setHelpText.bind(this);
        this.togleHelpModal = this.togleHelpModal.bind(this);
    }

    componentDidMount() {
        document.body.className="pick-type-body";
    }

    setType(gameType) {
        this.props.setType(gameType);
        this.props.nextStep();
    }

    togleNav(boolVal) {
        this.navExpanded = boolVal;
        this.setState({bValue: ! this.state.bValue});
    }

    togleHelpModal(boolVal) {
        this.setState({isHelpModal: boolVal})
    }

    setHelpText(helpTitle, helpText, hmChildName) {
        this.helpTitle = helpTitle;
        this.helpText = helpText;
        this.hmChildName = hmChildName;
    }

    render() {
        return(
            <>
                {this.navExpanded && (<NavBar navBarPosTop={0} 
                                              navBarPosLeft={460} 
                                              backgroundColor="#000000" 
                                              iconColor="969696" 
                                              iconColorHover="ffffff" 
                                              backgroundColorSelected="#3d3d3d" 
                                              border="1px solid #515151" />)}
                {this.navExpanded && (<NavColapse left={1060}  
                                                  top={-1} 
                                                  togleNav={this.togleNav} 
                                                  backgroundColor="#000000" 
                                                  iconColor="b6b6b6" 
                                                  border="1px solid #515151" />)}
                {! this.navExpanded && (<NavExpand left={1060}  
                                                   top={-1} 
                                                   togleNav={this.togleNav} 
                                                   backgroundColor="#000000" 
                                                   iconColor="b6b6b6" 
                                                   border="1px solid #515151" />)}
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
                <HelpComponent helpTitle="Explaining Game Types"
                               helpText={HelpText}
                               hmChildName="none"
                               setHelpText={this.setHelpText}
                               togleHelpModal={this.togleHelpModal}
                               highlighted="/Images/question-mark-000000.svg"
                               normal="/Images/question-mark-000000.svg" 
                               style={{width:16, height:16, left:980, top:280}} 
                />
                {this.state.isHelpModal && (<HelpModal helpTitle={this.helpTitle}
                                                       helpText={this.helpText}
                                                       hmChildName={this.hmChildName}
                                                       extraModal={null}
                                                       togleHelpModal={this.togleHelpModal}/>)}
            </>
        );
    }
}


