import React from "react";
import { Option } from "./Option";
import { stylesObjects } from "../create-piece-styles-objects";
import {styles} from "./_Options.jss";

export function Options({screenCase, save, toggleLoadModal, reset, eraseRange }) {
        return (
            <>
                <div className="options-tool" style={stylesObjects[screenCase]["Options"]()}>
                    <div className="options-title">Options</div>
                    <Option
                        className="load-option"
                        normal="/Images/load-piece/load-piece-a9a9a9.svg"
                        highlighted="/Images/load-piece/load-piece-72e2ff.svg"
                        clickMethod={toggleLoadModal}
                        alt="on click opens list of pieces to load"
                    />
                    <Option
                        className="save-option"
                        normal="/Images/save/save-a9a9a9.svg"
                        highlighted="/Images/save/save-72e2ff.svg"
                        clickMethod={save}
                        alt="on click saves piece if right criteria are met"
                    />
                    <Option
                        className="reset-option"
                        normal="/Images/reset-range/reset-range-a9a9a9.svg"
                        highlighted="/Images/reset-range/reset-range-72e2ff.svg"
                        clickMethod={reset}
                        alt="on click resets the to last save or blank if not saved"
                    />
                    <Option
                        className="erase-option"
                        normal="/Images/erase-range/erase-range-a9a9a9.svg"
                        highlighted="/Images/erase-range/erase-range-72e2ff.svg"
                        clickMethod={eraseRange}
                        alt="on click erases everything"
                    />
                </div>
            </>
        );
}
