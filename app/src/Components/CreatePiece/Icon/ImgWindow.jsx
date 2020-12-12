import React from "react";
import {SvgIcon} from "@material-ui/core";
import {white_img_border} from "../../styles/icons/white_img_border.jss";
import {black_img_border} from "../../styles/icons/black_img_border.jss";
import {white_img_template} from "../../styles/icons/white_img_template.jss";
import {black_img_template} from "../../styles/icons/black_img_template.jss";
import Button from "@material-ui/core/Button";
import {fontSize} from "../em.jss";
import {useStyles} from "./ImgWindow.jss";

export function ImgWindow({color, className, src, theme}) {
    const classes = useStyles({fontSize: fontSize, theme: theme});

    const border =
        color === "white"
            ? src
            ? white_img_border(theme)
            : white_img_template(theme)
            : src
            ? black_img_border(theme)
            : black_img_template(theme);

    return (
        <>
            <div className={className}>
                <SvgIcon className={classes.border}>{border}</SvgIcon>
                {src ? <img src={src} className={classes.img}/> : <div className={classes.img}/>}
            </div>
        </>
    );
}
