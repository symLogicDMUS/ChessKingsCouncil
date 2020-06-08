import React from "react"
import { Standard } from "./IconComponents/Standard";
import { Council } from "./IconComponents/Council";
import { Custom } from "./IconComponents/Custom";
import { Title } from "./IconComponents/Title";
import "./PickType.css";

export class PickType extends React.Component {
    constructor(props) {
        super(props);
        this.setType = this.setType.bind(this)
    }
    setType(gameType) {
        this.props.setType(gameType)
    }

    render() {
        return(
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
        );
    }
}
