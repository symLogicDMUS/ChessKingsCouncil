import React from "react";
import {v4 as uuidv4} from "uuid";
import {Option} from "./Option";

export function Erase({erase, theme}) {
    return (
        <Option
            onClick={erase}
            iconType="erase"
            theme={theme}
            key={uuidv4()}
        />
    );
}