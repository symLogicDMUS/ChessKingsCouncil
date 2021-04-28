import React, { useState } from "react";
import clsx from "clsx";
import { ChooseButton } from "./ChooseButton";
import { UploadImgButton } from "./UploadImgButton";
import { Avatar, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { MuiMenu } from "../../Reuseables/UserInput/MuiMenu";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { borderRadius, originTransform, useStyles } from "./ImgWindow.jss";

export function ImgWindow({
    src,
    color,
    resetImg,
    setPieceImg,
    whiteWindow,
    theme,
}) {
    const classes = useStyles({ theme });

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    return (
        <>
            <MuiMenu
                theme={theme}
                open={isMobileMenuOpen}
                anchorEl={mobileMoreAnchorEl}
                onClose={handleMobileMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                <MenuItem value={color} className={classes.menu_item}>
                    <ChooseButton
                        theme={theme}
                        color={color}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        handleMobileMenuClose={handleMobileMenuClose}
                        startIcon={
                            <AddPhotoAlternateIcon className={classes.icon} />
                        }
                    >
                        Choose
                    </ChooseButton>
                </MenuItem>
                <MenuItem value={color} className={classes.menu_item}>
                    <UploadImgButton
                        color={color}
                        id="choose-img"
                        setPieceImg={setPieceImg}
                        close={handleMobileMenuClose}
                        theme={theme}
                    >
                        Upload
                    </UploadImgButton>
                </MenuItem>
            </MuiMenu>
            {src ? (
                <img
                    src={src}
                    onClick={handleMobileMenuOpen}
                    className={clsx(classes.img_window, {
                        [classes.white_window]: whiteWindow,
                        [classes.black_window]: !whiteWindow,
                    })}
                    style={borderRadius}
                />
            ) : (
                <Avatar
                    variant="rounded"
                    onClick={handleMobileMenuOpen}
                    className={clsx(classes.img_window, {
                        [classes.white_window]: whiteWindow,
                        [classes.black_window]: !whiteWindow,
                    })}
                    style={borderRadius}
                >
                    {/*<AddPhotoAlternateIcon className={classes.icon} />*/}
                    {/*<Typography variant="caption" className={classes.text}>*/}
                    {/*    {color}*/}
                    {/*</Typography>*/}
                </Avatar>
            )}
        </>
    );
}
