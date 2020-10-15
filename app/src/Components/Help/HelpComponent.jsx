import React from "react";
import { findDidUserVisitPage, recordUserVisitedPage } from "../../API/findRecordDidUserVisitPage";
export class HelpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.src = this.props.normal;
        this.state = { highlighted: false };
        this.highlight = this.highlight.bind(this);
        this.unhighlight = this.unhighlight.bind(this);
    }

    componentDidMount() {
        findDidUserVisitPage(this.props.pageName).then(([exists]) => {
            recordUserVisitedPage(this.props.pageName).then(([res]) => {
                const firstTime = exists ? false : true;
                this.props.setFirstTime(firstTime);
            });
        });
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
                    height: this.props.fontSize,
                    top: "0px",
                    left: "0px",
                    fontSize: this.props.fontSize,
                    color: this.props.color,
                    cursor: "pointer",
                }}
                onClick={() => this.props.togleHelpModal(true)}
                onMouseEnter={this.highlight}
                onMouseLeave={this.unhighlight}
                alt="question mark, click for help"
            >
                Help
            </div>
        );
    }
}
