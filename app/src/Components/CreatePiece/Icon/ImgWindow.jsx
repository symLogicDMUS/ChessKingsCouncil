import React, { useState } from "react";
import clsx from "clsx";
import { ChooseButton } from "./ChooseButton";
import { UploadImgButton } from "./UploadImgButton";
import { Avatar, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { MuiMenu } from "../../Reuseables/UserInput/MuiMenu";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { originTransform, useStyles } from "./ImgWindow.jss";

export function ImgWindow({
    src,
    color,
    resetImg,
    setPieceImg,
    setImgFileObj,
    whiteWindow,
    theme,
}) {
    const classes = useStyles({ theme });

    const [moreAnchorEl, setMoreAnchorEl] = useState(null);
    const isMenuOpen = Boolean(moreAnchorEl);

    const handleMenuOpen = (event) => {
        setMoreAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMoreAnchorEl(null);
    };

    return (
        <>
            <MuiMenu
                theme={theme}
                open={isMenuOpen}
                anchorEl={moreAnchorEl}
                onClose={handleMenuClose}
                anchorOrigin={originTransform}
                transformOrigin={originTransform}
            >
                <MenuItem value={color} className={classes.menu_item}>
                    <ChooseButton
                        theme={theme}
                        color={color}
                        resetImg={resetImg}
                        setPieceImg={setPieceImg}
                        setImgFileObj={setImgFileObj}
                        handleMobileMenuClose={handleMenuClose}
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
                        setImgFileObj={setImgFileObj}
                        setPieceImg={setPieceImg}
                        close={handleMenuClose}
                        theme={theme}
                    >
                        Upload
                    </UploadImgButton>
                </MenuItem>
            </MuiMenu>
            {src ? (
                <img
                    src={src}
                    onClick={handleMenuOpen}
                    className={clsx(classes.img_window, {
                        [classes.white_window]: whiteWindow,
                        [classes.black_window]: !whiteWindow,
                    })}
                />
            ) : (
                <Avatar
                    variant="rounded"
                    onClick={handleMenuOpen}
                    className={clsx(classes.img_window, {
                        [classes.white_window]: whiteWindow,
                        [classes.black_window]: !whiteWindow,
                    })}
                >
                    <AddPhotoAlternateIcon className={classes.icon} />
                    <Typography variant="caption" className={classes.text}>
                        {color}
                    </Typography>
                </Avatar>
            )}
        </>
    );
}
