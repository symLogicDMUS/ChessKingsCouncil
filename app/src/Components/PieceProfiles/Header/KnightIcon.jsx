import React from "react";
import {memo} from "react";
import {icons} from "../../styles/icons/top/icons.jss";
import {themes} from "../../styles/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";

export const KnightIcon = memo(({theme}) => {
        return (
            <>
                {icons.knight_outline(
                    themes[theme].outline,
                    colors.Knight
                )}
            </>
        )
})