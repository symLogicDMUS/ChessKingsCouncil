import clsx from "clsx";
import React from "react";
import {useState} from "react";
import {isWideImg} from "./isWideImg";
import Box from "@material-ui/core/Box";
import {Backdrop} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MediaQuery from "react-responsive/src";
import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from '@material-ui/icons/Launch';
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./SeeExampleButton.jss";

export function SeeExampleButton(props) {
    const {lgSrc, smSrc, isText, addedText, theme, children} = props;

    const [img, setImg] = useState(false);
    const classes = useStyles({theme});

    const close = () => setImg(false);

    const alt = 'a gif or image to help explain.';

    return (
        <>
            <Backdrop open={img} className={classes.backdrop} onClick={close}>
                <Button
                    onClick={close}
                    className={classes.close}
                    startIcon={<CloseIcon fontSize={"large"}/>}
                >
                    Close Example
                </Button>
                <Box onClick={close} className={classes.img_area}>
                    <MediaQuery maxWidth={960}>
                        <img
                            src={smSrc}
                            alt={alt}
                            className={clsx(classes.src, {
                                [classes.wide_img]: isWideImg(smSrc),
                                [classes.thin_img]: !isWideImg(smSrc),
                            })}
                        />
                    </MediaQuery>
                    <MediaQuery minWidth={960}>
                        <img
                            src={lgSrc}
                            alt={alt}
                            className={clsx(classes.src, {
                                [classes.wide_img]: isWideImg(lgSrc),
                                [classes.thin_img]: !isWideImg(lgSrc),
                            })}
                        />
                    </MediaQuery>
                </Box>
            </Backdrop>
            <Typography
                className={clsx(classes.link, {
                    [classes.hide]: !isText
                })}
                onClick={() => setImg(true)}
            >
                {children}
            </Typography>
            <Button
                theme={theme}
                className={clsx(classes.button, {
                    [classes.hide]: isText,
                })}
                startIcon={<LaunchIcon/>}
                onClick={() => setImg(true)}
            >
                See Example {addedText}
            </Button>
        </>
    );
}