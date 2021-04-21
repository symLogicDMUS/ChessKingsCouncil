import React from "react";

const Option = React.lazy(() => import('./Option'));
const ToolButton = React.lazy(() => import('../../Reuseables/Clickables/ToolButton'));

function Erase({erase, theme, className, buttonType}) {
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

export default Erase;