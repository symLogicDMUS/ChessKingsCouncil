import React from "react";
import "../Options.scss";

export class Load extends React.Component {
    constructor(props) {
        super(props);
        this.state = { highlighted: false };
        this.src = this.props.normal;
        this.name = "Load";
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.openLoadModal = this.openLoadModal.bind(this);
    }

    openLoadModal() {
        this.props.togleLoadModal(true);
    }

    hoverOn() {
        this.props.togleOptionTool(false);
        this.setState({ highlighted: true });
    }

    hoverOff() {
        this.props.togleOptionTool(true);
        this.setState({ highlighted: false });
    }

    render() {
        if (this.state.highlighted) this.src = this.props.highlighted;
        else this.src = this.props.normal;

        return (
            <div
                className="load-option"
                onClick={this.openLoadModal}
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
            >
                <img
                    src={this.src}
                    className="option-img"
                    alt="Icon for loading piece"
                />
            </div>
        );
    }
}
