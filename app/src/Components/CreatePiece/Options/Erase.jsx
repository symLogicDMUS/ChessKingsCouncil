import React from "react";
import {Option} from "./Option";

export function Erase({erase, theme, className}) {
    return (
        <Option
            onClick={erase}
            iconType="erase"
            theme={theme}
            key='erase-option'
            className={className}
        />
    );
}