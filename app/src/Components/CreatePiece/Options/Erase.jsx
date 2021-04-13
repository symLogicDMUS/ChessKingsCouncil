import React from "react";
import {Option} from "./Option";
import {ToolButton} from "../../Reuseables/Clickables/ToolButton";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export function Erase({erase, theme, className, buttonType, miniVariantTool, toggleMiniVariantTool}) {
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
                    onClick={() => {
                        erase()
                        toggleMiniVariantTool("Erase")
                    }}
                    isActive={miniVariantTool==="Erase"}
                    iconName='erase_alt'
                    text="Erase"
                />
            )}
        </>
    );
}