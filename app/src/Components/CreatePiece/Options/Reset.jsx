import React from "react";

const Option = React.lazy(() => import('./Option'));
const ToolButton = React.lazy(() => import('../../Reuseables/Clickables/ToolButton'));

function Reset({
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
export default Reset;