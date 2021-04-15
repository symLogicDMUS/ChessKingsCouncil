import React from "react";
import { Option } from "./Option";
import { ToolButton } from "../../Reuseables/Clickables/ToolButton";

export function Reset({
    theme,
    reset,
    className,
    buttonType,
}) {
    return (
        <>
            {buttonType === "option" ? (
                <Option
                    onClick={reset}
                    iconType="reset"
                    theme={theme}
                    className={className}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    isActive={false}
                    onClick={reset}
                    iconName={"reset_alt"}
                    text={"reset"}
                />
            )}
        </>
    );
}
