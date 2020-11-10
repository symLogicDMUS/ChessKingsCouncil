import React from "react";
import { fontSizes } from "../../../styles/fontSizes";
import {styleObjects} from "../styleObjects";
import "./SubList.scss";

export function SubList({ screenCase, subs }) {
    const fontSize = fontSizes[screenCase]["medium2"]();
    const fontStyleObject = { fontSize: fontSize, paddingTop: fontSize * 0.3 };
    return (
        <div className="sub-list" style={styleObjects[screenCase]["SubList"]()}>
            <div className="customize-subs-header" style={{fontSize: fontSizes[screenCase]['medium1']()}}>
                Subs
            </div>
            <div className="customize-rook-label" style={fontStyleObject}>
                Rook{" "}
            </div>
            <div className="customize-rook-value" style={fontStyleObject}>
                {subs["Rook"]}
            </div>
            <div className="customize-bishop-label" style={fontStyleObject}>
                Bishop{" "}
            </div>
            <div className="customize-bishop-value" style={fontStyleObject}>
                {subs["Bishop"]}
            </div>
            <div className="customize-knight-label" style={fontStyleObject}>
                Knight{" "}
            </div>
            <div className="customize-knight-value" style={fontStyleObject}>
                {subs["Knight"]}
            </div>
            <div className="customize-queen-label" style={fontStyleObject}>
                Queen{" "}
            </div>
            <div className="customize-queen-value" style={fontStyleObject}>
                {subs["Queen"]}
            </div>
        </div>
    );
}
