import React from "react";
import "../Options.css";

export class LoadDef extends React.Component {

    constructor(props) {
        super(props);
        this.name = "Load";
        this.strokeColor = "#a9a9a9";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.openLoadModal = this.openLoadModal.bind(this);
    }

    openLoadModal() {
        this.props.togleLoadModal(true);
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
            <div className="option load-option" onClick={this.openLoadModal} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <svg viewBox="0 0 12 20.299">
                    <g transform="translate(-1.709 -0.548) scale(0.9 0.9)" className="option-icon" fill="none" stroke={this.strokeColor} strokeWidth="0.3px" fontSize="5.06px">
                        <g transform="translate(0.198 -1.002)">
                        <path
                            d="M12.722,7.448c.022.7-.922,1.342-2.476,1.7a12.351,12.351,0,0,1-5.052.019C3.622,8.82,2.646,8.181,2.633,7.486M12.722,13.3c.022.7-.922,1.342-2.476,1.7a12.351,12.351,0,0,1-5.052.019c-1.571-.342-2.548-.982-2.561-1.677m10.089-1.987c.022.7-.922,1.342-2.476,1.7a12.351,12.351,0,0,1-5.052.019c-1.571-.342-2.548-.982-2.561-1.677M12.722,9.4c.022.7-.922,1.342-2.476,1.7a12.351,12.351,0,0,1-5.052.019c-1.571-.342-2.548-.982-2.561-1.677M12.722,5.5c.022.7-.922,1.342-2.476,1.7a12.351,12.351,0,0,1-5.052.019c-1.571-.342-2.548-.982-2.561-1.677m10.1-1.828c0,1.073-2.27,1.942-5.071,1.942s-5.071-.87-5.071-1.942,2.27-1.942,5.071-1.942,5.071.87,5.071,1.942m-10.1.325v9.373h.006c.051,1.055,2.29,1.9,5.035,1.9s4.985-.845,5.035-1.9h.007V4.034h-.063c-.165.574-1.118,1.083-2.552,1.363-2.413.471-5.453.165-6.8-.683a1.3,1.3,0,0,1-.607-.68Z"
                        />
                        </g>
                        <text transform="translate(7.709 19.847)" stroke="none" fill={this.strokeColor} fontSize="5.06px" fontFamily="Tahoma" >
                        <tspan x={-5.317} y={0}>
                            {"Load"}
                        </tspan>
                        </text>
                    </g>
                </svg>
            </div>
        )
    }
}