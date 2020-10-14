import React from "react";
import { queryUser } from "../../API/queryUser";
import { titles, paragraphs, numSlides, children } from "./data";
import { HelpModal } from "./HelpModal";

export class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0, window: "menu" };
        this.setToHelpPage = this.setToHelpPage.bind(this);
        this.setToMenu = this.setToMenu.bind(this);
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
    }

    getHelpModals() {
        return <HelpModal title={titles[this.state.current]} />;
    }

    getBorderStyle(i) {
        var borderTop, borderBottom;
        switch (i) {
            case 0:
                borderTop = "1px solid #a9a9a9";
                borderBottom = null;
                break;
            case numSlides[this.props.pageName] - 1:
                borderTop = null;
                borderBottom = "1px solid #a9a9a9";
                break;
            default:
                borderBottom = null;
                borderBottom = null;
                break;
        }
        return [borderTop, borderBottom, "1px solid #a9a9a9", "1px solid #a9a9a9"];
    }

    getSlideOptions() {
        var slideOptions = [];
        var top_ = 40;
        var bgColor = "#5D5D5D";
        var borderTop, borderBottom, borderLeft, borderRight;
        for (let i = 0; i < numSlides[this.props.pageName]; i++) {
            [borderTop, borderBottom, borderLeft, borderRight] = this.getBorderStyle(i);
            slideOptions.push(
                <div
                    style={{
                        position: "absolute",
                        top: top_,
                        zIndex: 5,
                        height: 28,
                        width: 600,
                        color: "#a9a9a9",
                        fontSize: 20,
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        paddingTop: 1,
                        backgroundColor: bgColor,
                        borderTop: borderTop,
                        borderBottom: borderBottom,
                        borderLeft: borderLeft,
                        borderRight: borderRight,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        cursor: "pointer",
                    }}
                    className="help-item"
                    onClick={() => this.setToHelpPage(i)}
                >
                    {titles[this.props.pageName][i]}
                </div>
            );

            top_ = top_ + 28;
            bgColor = bgColor === "#5D5D5D" ? "#515151" : "#5D5D5D";
        }
        return slideOptions;
    }

    setToHelpPage(index) {
        this.setState({ window: "help", current: index });
    }

    setToMenu() {
        this.setState({ window: "menu" });
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
        if (this.props.firstTime) {
            return (
                <HelpModal
                    helpTitle={titles[this.props.pageName][this.state.current]}
                    helpText={paragraphs[this.props.pageName][this.state.current]}
                    togleHelpModal={this.props.togleHelpModal}
                    numSlides={numSlides[this.props.pageName]}
                    index={this.state.current}
                    forward={this.forward}
                    back={this.back}
                    firstTime={true}
                >
                    {children[this.props.pageName][this.state.current]}
                </HelpModal>
            );
        } else {
            return (
                <>
                    {this.state.window === "help" && (
                        <HelpModal
                            helpTitle={titles[this.props.pageName][this.state.current]}
                            helpText={paragraphs[this.props.pageName][this.state.current]}
                            numSlides={numSlides[this.props.pageName]}
                            index={this.state.current}
                            setToMenu={this.setToMenu}
                            firstTime={false}
                        >
                            {children[this.props.pageName][this.state.current]}
                        </HelpModal>
                    )}
                    {this.state.window === "menu" && (
                        <div
                            style={{
                                position: "absolute",
                                zIndex: 5,
                                width: 600,
                                height: 28 * numSlides + 30,
                                backgroundColor: "#515151",
                                top: 80,
                                left: this.props.posLeft,
                            }}
                        >
                            <div style={{ position: "absolute", height: 15, width: 602, backgroundColor: "#515151" }}>
                                <img
                                    src="/Images/close.svg"
                                    onClick={() => this.props.togleHelpModal(false)}
                                    style={{
                                        position: "absolute",
                                        zIndex: 6,
                                        top: 0,
                                        left: 585,
                                        width: 15,
                                        height: 15,
                                        cursor: "pointer",
                                    }}
                                    alt="X symbol to close window"
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    zIndex: 5,
                                    height: 40,
                                    width: 602,
                                    color: "#a9a9a9",
                                    backgroundColor: "#515151",
                                    fontSize: "40",
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    paddingTop: 3,
                                    textAlign: "center",
                                }}
                            >
                                Help Options
                            </div>
                            {this.getSlideOptions()}
                        </div>
                    )}
                </>
            );
        }
    }
}

export default Help;
