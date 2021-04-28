import React from "react";

const Option = React.lazy(() => import('./Option'));
const ToolButtonAlt = React.lazy(() => import('../../Reuseables/Clickables/ToolButtonAlt'));

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
                <ToolButtonAlt
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