import React from "react"
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import {NavBar} from "../../NavBar/NavBarRegular";
import {NavExpand} from "../../NavBar/NavExpand";
import {NavColapse} from "../../NavBar/NavColapse";

import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bValue: true};
        this.navExpanded = true;
        this.setType = this.setType.bind(this);
        this.togleNav = this.togleNav.bind(this);
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
            </>
        );
    }
}
