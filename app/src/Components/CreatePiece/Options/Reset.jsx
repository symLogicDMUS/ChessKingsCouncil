import React from "react";
import {Option} from "./Option";


export function Reset({theme, reset}) {
    return (
        <Option
            onClick={reset}
            iconType="reset"
            theme={theme}
            key="reset-option"
        />
    );
}
