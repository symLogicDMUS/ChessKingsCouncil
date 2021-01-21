import React from "react";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { fontSize002 } from "../styles/fontSize.jss";
import { Tooltip } from "@material-ui/core";
import { useStyles } from "./ImgChoice.jss";

export function ImgChoice({
    name,
    base64ImgStr,
    setChoice,
    isSelected,
    showName,
    theme,
}) {
    const classes = useStyles({ theme: theme, fontSize: fontSize002 });
    return (
        <>
            <div className={classes.img_choice}>
                <Box
                    onClick={() => setChoice(name)}
                    className={isSelected ? classes.selected : classes.normal}
                >
                    {! showName ? (
                        <Tooltip title={name}>
                            <motion.img
                                src={base64ImgStr}
                                whileHover={{ scale: 1.3 }}
                                className={classes.img}
                                alt="list of icons that can be used as pieces"
                            />
                        </Tooltip>
                    ) : (
                        <motion.img
                            src={base64ImgStr}
                            whileHover={{ scale: 1.3 }}
                            className={classes.img}
                            alt="list of icons that can be used as pieces"
                        />
                    )}
                </Box>
                {showName && (
                    <Typography className={classes.img_name}>{name}</Typography>
                )}
            </div>
        </>
    );
}
