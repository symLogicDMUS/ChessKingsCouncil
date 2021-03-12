import React from "react";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { Tooltip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../Reuseables/Modals/MuiGridItem.jss";
import "./ImgChoice.scss";

export function ImgChoice({
    name,
    src,
    setChoice,
    isSelected,
    showName,
    theme,
}) {
    const classes = useStyles({ theme: theme });
    return (
        <div className={classes.item_choice}>
            <Box
                onClick={() => setChoice(name)}
                className={isSelected ? classes.selected : classes.normal}
            >
                {!showName ? (
                    <Tooltip
                        title={name}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <motion.img
                            src={src}
                            className='image'
                            whileHover={{ scale: 1.3 }}
                            alt="list of icons that can be used as pieces"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </Tooltip>
                ) : (
                    <motion.img
                        src={src}
                        className='image'
                        whileHover={{ scale: 1.3 }}
                        alt="list of icons that can be used as pieces"
                        onContextMenu={(e) => e.preventDefault()}
                    />
                )}
            </Box>
            {showName && (
                <Typography className={classes.item_name}>{name}</Typography>
            )}
        </div>
    );
}