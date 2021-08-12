import React from "react";

const Option = React.lazy(() => import("../../Reuseables/Clickables/Option"));
const ToolButton = React.lazy(() =>
    import("../../Reuseables/MiniVariantTool/ToolButton")
);

function Reset(props) {
    const { theme, reset, className, buttonType, ...other } = props;

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
                    {...other}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    isActive={false}
                    onClick={reset}
                    iconName={"reset_alt"}
                    text={"reset"}
                    {...other}
                />
            )}
        </>
    );
}
export default Reset;
