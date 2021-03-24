import {useStyles} from "./CustomizeHeader.jss";
import Box from "@material-ui/core/Box";
import {MuiDropdown} from "../../Reuseables/UserInput/MuiDropdown";
import {MenuItem} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../styles/icons/top/icons.jss";
import {themes} from "../../styles/themes.jss";
import React from "react";

export function SubDropdown({customPieceName, standardPieceThatSubbingFor, toggleSub, theme}) {
    const classes = useStyles({theme});

    const handleChange = (value) => {
        if (value === "None" && standardPieceThatSubbingFor) {
            toggleSub(null, standardPieceThatSubbingFor);
        } else {
            toggleSub(customPieceName, value)
        }
    };

    return (
        <Box rootClassName={classes.sub_dropdown}>
            <MuiDropdown
                updateParent={handleChange}
                overrideItem={standardPieceThatSubbingFor}
            >
                <MenuItem value="None">
                    <BlockIcon
                        className={clsx(classes.sub_icon, {
                            [classes.selected]: true,
                        })}
                    />
                </MenuItem>,
                <MenuItem value="Queen">
                    <SvgIcon
                        className={clsx(classes.sub_icon, {
                            [classes.selected]: true,
                        })}
                    >
                        {icons.queen_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>,
                <MenuItem value="Rook">
                    <SvgIcon
                        className={clsx(classes.sub_icon, {
                            [classes.selected]: true,
                        })}
                    >
                        {icons.rook_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>,
                <MenuItem value="Knight">
                    <SvgIcon
                        className={clsx(classes.sub_icon, {
                            [classes.selected]: true,
                        })}
                    >
                        {icons.knight_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>
                <MenuItem value="Bishop">
                    <SvgIcon
                        className={clsx(classes.sub_icon, {
                            [classes.selected]: true,
                        })}
                    >
                        {icons.bishop_outline(themes[theme].outline)}
                    </SvgIcon>
                </MenuItem>
            </MuiDropdown>
        </Box>
    )
}