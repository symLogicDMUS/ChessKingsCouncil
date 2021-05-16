import React from "react";

const Option = React.lazy(() => import('../../Reuseables/Clickables/Option'));
const ToolButtonAlt = React.lazy(() => import('../../Reuseables/MiniVariantTool/ToolButtonAlt'));

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
                    name={"Reset"}
                    theme={theme}
                    className={className}
                    isGameOption={false}
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