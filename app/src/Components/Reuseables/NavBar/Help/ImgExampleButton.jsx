import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from "@material-ui/icons/Launch";
import { useStyles as useMoreStyles } from "./SeeExampleButton.jss";
import { useStyles } from "./ImgExampleButton.jss";

export function ImgExampleButton({ src, theme, children }) {
    const [img, setImg] = useState(false);
    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    return (
        <>
            {img ? (
                <Box className={classes2.modal}>
                    <Button
                        onClick={() => setImg(false)}
                        startIcon={
                            <CloseIcon
                                fontSize="large"
                                className={classes2.icon}
                            />
                        }
                        className={classes2.close}
                    >
                        Close Image
                    </Button>
                    <img
                        className={classes2.src}
                        src={src}
                        alt="an image to help explain."
                    />
                </Box>
            ) : null}
            {!img ? (
                <Box className={classes.inline_link}>
                    <Button
                        theme={theme}
                        className={classes2.button}
                        startIcon={<LaunchIcon />}
                        onClick={() => setImg(true)}
                    >
                        {children}
                    </Button>
                </Box>
            ) : null}
        </>
    );
}
