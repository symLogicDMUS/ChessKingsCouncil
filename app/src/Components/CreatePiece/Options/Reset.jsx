import React from "react";
import { Option } from "./Option";
import { ToolButton } from "../../Reuseables/Clickables/ToolButton";

export function Reset({
    theme,
    reset,
    className,
    buttonType,
    miniVariantTool,
    toggleMiniVariantTool,
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
                    isActive={miniVariantTool === "Reset"}
                    onClick={() => {
                        reset()
                        toggleMiniVariantTool("Reset")
                    }}
                    iconName={"reset_alt"}
                    text={"reset"}
                />
            )}
        </>
    );
}
