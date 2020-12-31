import React, {useState} from "react";
import {titles, paragraphs, numSlides, children} from "./data";
import {HelpModal} from "./HelpModal";
import {useStyles} from "./Help.jss";


export function Help({firstTime, pageName, togleHelpModal}) {

    let [state, setState] = useState({current: 0, window: "menu"});

    const classes = useStyles()

    const getSlideOptions = () => {
        const slideOptions = [];
        for (let i = 0; i < numSlides[pageName]; i++) {
            slideOptions.push(
                <div
                    className={classes.help_item}
                    onClick={() => setState({window: "help", current: i})}
                >
                    {titles[pageName][i]}
                </div>
            );
        }
        return slideOptions;
    }

    const forward = () => {
        if (state.current === numSlides[pageName] - 1) {
            setState({current: 0, window: "help"});
        } else {
            setState({current: state.current + 1, window: "help"});
        }
    }

    const back = () => {
        if (state.current === 0) {
            setState({current: numSlides[pageName] - 1, window: "help"});
        } else {
            setState({current: state.current - 1, window: "help"});
        }
    }

    if (firstTime) {
        return (
            <HelpModal
                helpTitle={titles[pageName][state.current]}
                helpText={paragraphs[pageName][state.current]}
                togleHelpModal={togleHelpModal}
                numSlides={numSlides[pageName]}
                index={state.current}
                forward={forward}
                back={back}
                firstTime={true}
            >
                {children[pageName][state.current]}
            </HelpModal>
        );
    } else {
        return (
            <>
                {state.window === "help" && (
                    <HelpModal
                        helpTitle={titles[pageName][state.current]}
                        helpText={paragraphs[pageName][state.current]}
                        numSlides={numSlides[pageName]}
                        index={state.current}
                        setToMenu={() => setState({window: "menu", current: 0})}
                        firstTime={false}
                    >
                        {children[pageName][state.current]}
                    </HelpModal>
                )}
                {state.window === "menu" && (
                    <div className={classes.menu}>
                        <div style={{position: "absolute", height: 15, width: 602, backgroundColor: "#515151"}}>
                            <img
                                src="/Images/close/close.svg"
                                className={classes.close_icon}
                                onClick={() => togleHelpModal(false)}
                                alt="X symbol to close window"
                            />
                        </div>
                        <div className={classes.title}>
                            Help Options
                        </div>
                        {getSlideOptions()}
                    </div>
                )}
            </>
        );
    }
}

export default Help;
