import React from "react"
import "../Options.css";

export class ResetDef extends React.Component {

    constructor(props) {
        super(props);
        this.name = "Reset";
        this.strokeColor = "#a9a9a9";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }
    
    hoverOn() {
        this.props.hoverResponse(this.name)
    }

    hoverOff() {
        this.props.hoverResponse(null);
    }

    render() {

        this.strokeColor = "#a9a9a9";
        if (this.props.mouseOver === this.name)
            this.strokeColor = "#00CCFF";

        return (
            <div className="option reset-option" onClick={this.props.reset} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <svg viewBox="0 0 14.288 22.162">
                    <g transform="translate(-0.283 -0.675)" fill="none" stroke={this.strokeColor} strokeWidth="0.3px" className="option-icon">
                        <text  transform="translate(7.572 19.837)" stroke="none" fill={this.strokeColor} fontSize="5.4px" fontFamily="Tahoma" >
                        <tspan x={-6.209} y={1.4}>
                            {"Reset"}
                        </tspan>
                        </text>
                        <path
                        
                        d="M9.824,5.273a1.863,1.863,0,0,1-1.76,1.952A1.863,1.863,0,0,1,6.3,5.273a1.863,1.863,0,0,1,1.76-1.952,1.863,1.863,0,0,1,1.76,1.952M1.472,12.687.5,11.03,1.024,11l.527-.032.093-.792C2.1,6.307,3.5,2.8,5.095,1.531,5.838.941,6.289.843,8.044.893c1.438.041,1.607.067,2,.307,1.838,1.126,3.278,4.381,3.882,8.773a37.99,37.99,0,0,1,.3,3.875v.493H12.079v-.7a34.718,34.718,0,0,0-.4-4.331C11.1,5.627,9.817,2.645,8.335,1.5c-.482-.371-.6-.372-1.072-.007A8.649,8.649,0,0,0,4.918,5.275a24.144,24.144,0,0,0-1.165,5.131l-.047.558.5.033.5.033L3.581,12.687,2.446,14.344Z"
                        />
                    </g>
                </svg>
            </div>
        );
    }

}