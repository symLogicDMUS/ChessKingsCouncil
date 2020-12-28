import React from "react";
import { useStyles } from "./HelpModal.jss";

export function HelpModal({
    firstTime,
    togleHelpModal,
    setToMenu,
    back,
    forward,
    index,
    numSlides,
    helpTitle,
    helpText,
    children,
}) {
    const classes = useStyles();

    const closeMethod = firstTime ? () => togleHelpModal(false) : setToMenu;
    const backCursor = index === 0 ? "not-allowed" : "pointer";
    const backMethod = index === 0 ? null : back;
    const forwardCursor = index === numSlides - 1 ? "not-allowed" : "pointer";
    const forwardMethod = index === numSlides - 1 ? null : forward;

    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <div className={classes.top}>
                    <div className={classes.title}>{helpTitle}</div>
                    <div className={classes.close} onClick={closeMethod}>
                        <img
                            src="/Images/close/close.svg"
                            style={{ width: "15px", height: "15px" }}
                            alt="X symbol to close window"
                        />
                    </div>
                </div>
                <div className={classes.text_area}>{helpText}</div>
                {(!firstTime || numSlides === 1) && (
                    <div className={classes.bottom}>
                        <button onClick={closeMethod} className={classes.bottom_button}>
                            Ok
                        </button>
                    </div>
                )}
                {firstTime && numSlides > 1 && (
                    <>
                        <button
                            onClick={backMethod}
                            style={{
                                position: "absolute",
                                top: 390,
                                left: 230,
                                width: 90,
                                height: 30,
                                color: "#b6b6b6",
                                textAlign: "center",
                                fontSize: 16,
                                paddingTop: 7,
                                backgroundColor: "#707070",
                                borderRadius: "5px",
                                border: "none",
                                cursor: backCursor,
                            }}
                        >
                            Previous
                        </button>
                        <button
                            onClick={forwardMethod}
                            style={{
                                position: "absolute",
                                top: 390,
                                left: 335,
                                width: 90,
                                height: 30,
                                color: "#b6b6b6",
                                textAlign: "center",
                                fontSize: 16,
                                paddingTop: 7,
                                backgroundColor: "#707070",
                                borderRadius: "5px",
                                border: "none",
                                cursor: forwardCursor,
                            }}
                        >
                            Next
                        </button>
                        <button
                            onClick={() => togleHelpModal(false)}
                            style={{
                                position: "absolute",
                                top: 390,
                                left: 440,
                                width: 90,
                                height: 30,
                                color: "#b6b6b6",
                                textAlign: "center",
                                fontSize: 16,
                                paddingTop: 7,
                                backgroundColor: "#707070",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Done
                        </button>
                    </>
                )}
            </div>
            {children !== undefined && children}
        </div>
    );
}

/* 
<img
    src="/Images/left-arrow-a9a9a9.svg"
    style={{ position: "relative", height: 10, width: 10, left: 10 }}
/>
*/
