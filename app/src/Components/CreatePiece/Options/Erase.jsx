import React from "react";

const Option = React.lazy(() => import('../../Reuseables/Clickables/Option'));
const ToolButtonAlt = React.lazy(() => import('../../Reuseables/MiniVariantTool/ToolButtonAlt'));

function Erase({erase, theme, className, buttonType}) {
    return (
        <>
            {buttonType==="option" ? (
                <Option
                    onClick={erase}
                    iconType="erase"
                    name={"Erase"}
                    theme={theme}
                    className={className}
                    isGameOption={false}
                />
            ) : (
                <ToolButtonAlt
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

export default Erase;