import React from "react";
import {Option} from "./Option";
import {ToolButton} from "../../Reuseables/Clickables/ToolButton";

export function Erase({erase, theme, className, buttonType}) {
    return (
        <>
            {buttonType==="option" ? (
                <Option
                    onClick={erase}
                    iconType="erase"
                    theme={theme}
                    className={className}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    onClick={erase}
                    isActive={false}
                    iconName='erase_alt'
                    text="Erase"
                />
            )}
        </>
    );
}