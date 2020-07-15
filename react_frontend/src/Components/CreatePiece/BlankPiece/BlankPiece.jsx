import React from "react";
import "../Options.css";

export class BlankPiece extends React.Component {

    constructor(props) {
        super(props);
        this.name = "Erase";
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
            <div className="option blank-option"  onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <svg viewBox="0 0 14 23.5">
                    <g transform="translate(-149 -256.148)" fill="none" stroke={this.strokeColor} strokeWidth="0.3px" fontSize="5.06px">
                        <text  transform="translate(156 275.968)" stroke="none" fill={this.strokeColor} fontSize="5.06px" fontFamily="Tahoma" >
                        <tspan x={-6.072} y={0.3}>
                            {"Erase"}
                        </tspan>
                        </text>
                        <path

                        d="M3.918,4.261c-.011.856,4.734,1.555,6.638.235l.028,1.4C10.173,7.434,4.625,7.722,3.9,5.8ZM10.541.735c.041.343-1.406.628-3.24.637S3.937,1.113,3.874.77,5.24.139,7.073.125s3.38.252,3.465.595m.006.064c-.149.318-1.442.57-3.071.6-1.721.03-3.28-.2-3.616-.53v3.38h0c-.065.067-.035.136-.007.2.165.389,1.589.822,3.435.787S10.7,4.7,10.542,4.31l0,0c-.011-.025.028-.051,0-.076h0ZM10.52,6.328a14.3,14.3,0,0,1-1.963.81l-.021,7.1,1.984-1.531Zm-4.463.863,2.3-.01-.071,7.17-2.247.012ZM3.9,5.8c.133.352.277.707,1.935,1.364l-.022,7.076L3.9,12.741Z"
                        transform="translate(148.569 256.159)"
                        />
                    </g>
                </svg>
            </div>
        );
    }
}