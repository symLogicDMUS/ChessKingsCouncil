import React, { useState } from "react";
import { MenuItem, Typography } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import SvgIcon from "@material-ui/core/SvgIcon";
import { themes } from "../../styles/themes/themes.jss";
import IconButton from "@material-ui/core/IconButton";
import { ResolvePieceIcon } from "./ResolvePieceIcon";
import { icons } from "../../styles/icons/top/icons.jss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { originTransform } from "../../Reuseables/AppBar/Content/ThreeItemAppBarContent.jss";
import { MuiMenuWithCaption } from "../../Reuseables/UserInput/MuiMenuWithCaption";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./SubDropdown.jss";

export function SubDropdown({
    customPieceName,
    standardPieceThatSubbingFor,
    toggleSub,
    theme,
}) {
    const md = useMediaQuery("(min-width: 600px)");

    const classes = useStyles({ theme: theme });

    const handleChange = (value) => {
        if (value === "No Sub" && standardPieceThatSubbingFor) {
            toggleSub(null, standardPieceThatSubbingFor);
        } else {
            toggleSub(customPieceName, value);
        }
        handleMobileMenuClose();
    };

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const pieceName = standardPieceThatSubbingFor
        ? standardPieceThatSubbingFor
        : "No Sub";

    return (
        <>
            <MuiMenuWithCaption
                theme={theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                <Typography
                    className={classes.caption}
                    variant="caption"
                    noWrap
                >
                    Sub {customPieceName} in for:
                </Typography>
                <MenuItem value="No Sub" onClick={() => handleChange("No Sub")}>
                    <BlockIcon className={classes.piece_icon} />
                    <Typography className={classes.list_text}>
                        No Sub
                    </Typography>
                </MenuItem>
                <MenuItem value="Queen" onClick={() => handleChange("Queen")}>
                    <SvgIcon className={classes.piece_icon}>
                        {icons.queen_outline(themes[theme].outline)}
                    </SvgIcon>
                    <Typography className={classes.list_text}>Queen</Typography>
                </MenuItem>
                <MenuItem value="Rook" onClick={() => handleChange("Rook")}>
                    <SvgIcon className={classes.piece_icon}>
                        {icons.rook_outline(themes[theme].outline)}
                    </SvgIcon>
                    <Typography className={classes.list_text}>Rook</Typography>
                </MenuItem>
                <MenuItem value="Knight" onClick={() => handleChange("Knight")}>
                    <SvgIcon className={classes.piece_icon}>
                        {icons.knight_outline(themes[theme].outline)}
                    </SvgIcon>
                    <Typography className={classes.list_text}>
                        Knight
                    </Typography>
                </MenuItem>
                <MenuItem value="Bishop" onClick={() => handleChange("Bishop")}>
                    <SvgIcon className={classes.piece_icon}>
                        {icons.bishop_outline(themes[theme].outline)}
                    </SvgIcon>
                    <Typography className={classes.list_text}>
                        Bishop
                    </Typography>
                </MenuItem>
            </MuiMenuWithCaption>
            <div className={classes.seeMore}>
                {md ? (
                    <Typography className={classes.title}>
                        {pieceName}
                    </Typography>
                ) : null}
                <IconButton onClick={handleMobileMenuOpen} edge="end">
                    <ResolvePieceIcon theme={theme} pieceName={pieceName} />
                    <ArrowDropDownIcon className={classes.expand} />
                </IconButton>
            </div>
        </>
    );
}
