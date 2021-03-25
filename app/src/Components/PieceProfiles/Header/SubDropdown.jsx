import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {MenuItem} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import SvgIcon from "@material-ui/core/SvgIcon";
import {themes} from "../../styles/themes.jss";
import {icons} from "../../styles/icons/top/icons.jss";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";
import {useStyles as useMoreStyles} from "./CustomizeHeader.jss";
import { useStyles } from "./SubDropdown.jss";


export function SubDropdown({customPieceName, standardPieceThatSubbingFor, toggleSub, theme}) {
    const classes = useStyles({theme: theme})
    const classes2 = useMoreStyles({theme});

    const handleChange = (value) => {
        if (value === "None" && standardPieceThatSubbingFor) {
            toggleSub(null, standardPieceThatSubbingFor);
        } else {
            toggleSub(customPieceName, value)
        }
    };

    let overrideItem;
    if (standardPieceThatSubbingFor) {
        overrideItem = standardPieceThatSubbingFor;
    }
    else {
        overrideItem = "None";
    }

    return (
        <Box className={classes2.sub_dropdown}>
            <MuiDropdown
                updateParent={handleChange}
                overrideItem={overrideItem}
                rootClassName={classes2.sub_dropdown}
                classesObj={{root: classes2.sub_dropdown}}
            >
                <MenuItem value="None">
                    <BlockIcon
                        className={clsx(classes2.sub_icon, {
                            [classes2.selected]: true,
                        })}
                    />
                </MenuItem>,
                <MenuItem value="Queen">
                    <SvgIcon
                        className={clsx(classes2.sub_icon, {
                            [classes2.selected]: true,
                        })}
                    >
                        {icons.queen_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>,
                <MenuItem value="Rook">
                    <SvgIcon
                        className={clsx(classes2.sub_icon, {
                            [classes2.selected]: true,
                        })}
                    >
                        {icons.rook_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>,
                <MenuItem value="Knight">
                    <SvgIcon
                        className={clsx(classes2.sub_icon, {
                            [classes2.selected]: true,
                        })}
                    >
                        {icons.knight_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>
                <MenuItem value="Bishop">
                    <SvgIcon
                        className={clsx(classes2.sub_icon, {
                            [classes2.selected]: true,
                        })}
                    >
                        {icons.bishop_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>
            </MuiDropdown>
        </Box>
    )
}