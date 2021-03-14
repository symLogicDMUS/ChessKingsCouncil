import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BlockIcon from "@material-ui/icons/Block";
import {themes} from "../../../styles/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../../../styles/icons/top/icons.jss";
import {useStyles} from "../../../PieceProfiles/Header/CustomizeHeader.jss";

export function SubExample({theme}) {
    const classes = useStyles({theme});
    return (
        <Box
            className={classes.box}
            style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: '0.8em',
                marginBottom: '0.8em'
            }}
        >
            <IconButton className={classes.no_sub_button}>
                <BlockIcon
                    className={classes.no_sub_icon}
                    style={{color: themes[theme].text}}
                />
            </IconButton>
            <IconButton
                className={classes.sub_button}
            >
                <SvgIcon className={classes.sub_icon}>
                    {icons.queen_outline(
                        themes[theme].outline,
                        'none',
                    )}
                </SvgIcon>
            </IconButton>
            <IconButton
                className={classes.sub_button}
            >
                <SvgIcon className={classes.sub_icon}>
                    {icons.rook_outline(
                        themes[theme].outline,
                        'none'
                    )}
                </SvgIcon>
            </IconButton>
            <IconButton
                className={classes.sub_button}
            >
                <SvgIcon className={classes.sub_icon}>
                    {icons.knight_outline(
                        themes[theme].outline,
                        'none',
                    )}
                </SvgIcon>
            </IconButton>
            <IconButton
                className={classes.sub_button}
            >
                <SvgIcon className={classes.sub_icon}>
                    {icons.bishop_outline(
                        themes[theme].outline,
                        'none'
                    )}
                </SvgIcon>
            </IconButton>
        </Box>
    )
}