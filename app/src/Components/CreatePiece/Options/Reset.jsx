import React from "react";
import {v4 as uuidv4} from 'uuid';
import {Option} from "./Option";


export function Reset({theme, reset}) {
    return (
        <Option
            clickMethod={reset}
            iconType="reset"
            theme={theme}
            key={uuidv4()}
        />
    );
}
