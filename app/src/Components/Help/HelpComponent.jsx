import React from "react";

export class HelpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.src = this.props.normal;
        this.state = { highlighted: false };
        this.openHelpModal = this.openHelpModal.bind(this);
        this.highlight = this.highlight.bind(this);
        this.unhighlight = this.unhighlight.bind(this);
    }

    openHelpModal() {
        this.props.togleHelpModal(true);
    }

    highlight() {
        this.setState({ highlighted: true });
    }

    unhighlight() {
        this.setState({ highlighted: false });
    }

    render() {
        if (this.state.highlighted) this.src = this.props.highlighted;
        else this.src = this.props.normal;

        return (
            <img
                src={this.src}
                style={{
                    position: "absolute",
                    width: "15vw",
                    height: "4vh",
                    top: "1vh",
                    left: "90.2vw",
                    fontSize: "4vh",
                    cursor: "pointer",
                }}
                onClick={this.openHelpModal}
                onMouseEnter={this.highlight}
                onMouseLeave={this.unhighlight}
                alt="question mark, click for help"
            />
        );
    }
}
