import React from "react";
import { titles, paragraphs, numSlides, children } from "./data";
import { HelpModal } from "./HelpModal";

export class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
    }

    getHelpModals() {
        return <HelpModal title={titles[this.state.current]} />;
    }

    forward() {
        if (this.state.current === numSlides[this.props.pageName] - 1) {
            this.setState({ current: 0 });
        } else {
            this.setState({ current: this.state.current + 1 });
        }
    }

    back() {
        if (this.state.current === 0) {
            this.setState({ current: numSlides[this.props.pageName] - 1 });
        } else {
            this.setState({ current: this.state.current - 1 });
        }
    }

    render() {
        return (
            <HelpModal
                helpTitle={titles[this.props.pageName][this.state.current]}
                helpText={paragraphs[this.props.pageName][this.state.current]}
                togleHelpModal={this.props.togleHelpModal}
                forward={this.forward}
                back={this.back}
            >
                {children[this.props.pageName][this.state.current]}
            </HelpModal>
        );
    }
}

export default Help;
