import React from "react";

const Option = React.lazy(() => import("../../Reuseables/Clickables/Option"));
const ToolButton = React.lazy(() =>
    import("../../Reuseables/MiniVariantTool/ToolButton")
);

function Erase(props) {
    const { erase, theme, className, buttonType, ...other } = props;
    return (
        <>
            {buttonType === "option" ? (
                <Option
                    onClick={erase}
                    iconType="erase"
                    name={"Erase"}
                    theme={theme}
                    className={className}
                    isGameOption={false}
                    {...other}
                />
            ) : (
                <ToolButton
                    theme={theme}
                    onClick={erase}
                    isActive={false}
                    iconName="erase_alt"
                    text="Erase"
                    {...other}
                />
            )}
        </>
    );
}

export default Erase;
