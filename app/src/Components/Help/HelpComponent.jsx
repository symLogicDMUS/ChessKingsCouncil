import React from "react";
import {queryUser} from "../../API/queryUser";
export class HelpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.src = this.props.normal;
        this.state = { highlighted: false };
        this.openHelpModal = this.openHelpModal.bind(this);
        this.highlight = this.highlight.bind(this);
        this.unhighlight = this.unhighlight.bind(this);
    }

    componentDidMount() {
        queryUser(this.props.pageName).then(([exists]) => {
            const firstTime = exists ? false : true;
            this.props.setFirstTime(firstTime);
        });
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
            <div
                style={{
                    position: "absolute",
                    width: this.props.width,
                    height: this.props.height,
                    top: "0px",
                    left: "0px",
                    fontSize: this.props.fontSize,
                    color: this.props.color,
                    cursor: "pointer",
                }}
                onClick={this.openHelpModal}
                onMouseEnter={this.highlight}
                onMouseLeave={this.unhighlight}
                alt="question mark, click for help"
            >
                Help
            </div>

        );
    }
}
