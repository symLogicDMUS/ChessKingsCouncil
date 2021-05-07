import React from "react";

const Option = React.lazy(() => import('./Option'));
const ToolButtonAlt = React.lazy(() => import('../../Reuseables/Clickables/ToolButtonAlt'));

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