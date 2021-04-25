import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MediaQuery from "react-responsive/src";
import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from '@material-ui/icons/Launch';
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./SeeExampleButton.jss";

export function SeeExampleButton({lgSrc, smSrc, isText, addedText, theme, children}) {
    const [img, setImg] = useState(false);
    const classes = useStyles({theme});

    return (
        <>
            {img ? (
                <Box className={classes.modal}>
                    <Button onClick={() => setImg(false)}
                            startIcon={<CloseIcon fontSize='large' className={classes.icon} />}
                            className={classes.close}
                    >
                        Close Example
                    </Button>
                    <Box className={classes.img_area}>
                        <MediaQuery maxWidth={960}>
                            <img className={classes.src} src={smSrc} alt='a gif or image to help explain.' />
                        </MediaQuery>
                        <MediaQuery minWidth={960}>
                            <img className={classes.src} src={lgSrc} alt='a gif or image to help explain.' />
                        </MediaQuery>
                    </Box>
                </Box>
            ) : null}
            {! img ? (
                isText ? (
                    <Typography className={classes.link} onClick={() => setImg(true)}>{children}</Typography>
                ) : (
                    <Button
                        theme={theme}
                        className={classes.button}
                        startIcon={<LaunchIcon />}
                        onClick={() => setImg(true)}
                    >
                        See Example {addedText}
                    </Button>
                )
            ) : null}
        </>
    );
}