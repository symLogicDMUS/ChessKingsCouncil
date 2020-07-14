import React from "react";
import "../Options.css";

export class ThemePiece extends React.Component {

    constructor(props) {
        super(props);
        this.name = "Theme";
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
            <div className="option theme-option" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <svg viewBox="0 0 20 30">

                    <g transform="translate(2.811 -3.471) scale(1.3 1.3)" fill="none" stroke={this.strokeColor} strokeWidth="0.3px" fontSize="5.06px">
                        <text  transform="translate(5.189 22.719)" stroke="none" fill={this.strokeColor} fontSize="5.06px" fontFamily="Tahoma" >
                        <tspan x={-7.296} y={2}>
                            {"Theme"}
                        </tspan>
                        </text>
                        <path            
                         d="M7.234,9.925c-.008,0-.013.014-.01.034s-.009.047-.054.061c-.09.028-1.473.038-2.4.017-.74-.017-.835-.023-.857-.051a.055.055,0,0,0-.065-.019c-.041.013-.051.031-.028.054a.179.179,0,0,1,.02.073A.211.211,0,0,0,4,10.262a1.478,1.478,0,0,1,.645.543,1.507,1.507,0,0,1,.268.555,8.239,8.239,0,0,1-.078,1.981,6.49,6.49,0,0,0-.079,1.739A8.032,8.032,0,0,0,5.121,17a.64.64,0,0,0,.263.324c.311.131.574-.245.8-1.152a5.85,5.85,0,0,0,.139-2.214c-.032-.37-.1-1.45-.12-1.918A2.033,2.033,0,0,1,6.361,11a1.755,1.755,0,0,1,.277-.34c.038-.032.174-.127.3-.212a2.308,2.308,0,0,0,.295-.219A.231.231,0,0,0,7.3,9.979c-.023-.039-.048-.059-.061-.054Zm-1.678,5.72h0c.111,0,.2.211.2.471s-.09.471-.2.471-.2-.211-.2-.471.089-.47.2-.471ZM5.111,7.9a7.594,7.594,0,0,1-1.2-.046c-.068-.022-.1-.042-.1-.072s-.023-.377-.041-.788-.057-1.009-.089-1.332c-.05-.512-.1-1.179-.147-1.791l-.013-.184.064-.026a.122.122,0,0,1,.126,0,.1.1,0,0,0,.121,0,.122.122,0,0,1,.119-.008c.049.018.075.015.157-.019.1-.04.1-.041.184-.005a.448.448,0,0,0,.262.02,4.261,4.261,0,0,1,.85,0A14.13,14.13,0,0,0,6.947,3.7a1.013,1.013,0,0,1,.432.04c.106.028.195.054.2.056s-.06.726-.1,1c-.026.166-.053.443-.059.614s-.037.6-.069.954c-.063.708-.1,1.2-.092,1.341,0,.086,0,.1-.061.129a.84.84,0,0,1-.167.062A12.424,12.424,0,0,1,5.111,7.9Zm2.13-.156a.641.641,0,0,1-.3.169l-2.993-.04-.181-.129.11,2.373,3.151-.032L7.241,10Z"
                        />
                    </g>
                </svg>
            </div>
        )
    }
}