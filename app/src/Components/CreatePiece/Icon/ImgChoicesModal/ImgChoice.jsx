import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Box from "@material-ui/core/Box";
import { Tooltip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../Reuseables/Modals/MuiGridItem.jss";
import clsx from "clsx";
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

    const [bValue, reRender] = useState(false);
    useEffect(() => {
        function handleResize() {
            reRender(!bValue);
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <div className={classes.item_choice}>
            <Box
                onClick={() => setChoice(name)}
                className={clsx(classes.item_container, {
                    [classes.item_selected]: isSelected,
                    [classes.item_unselected]: !isSelected,
                })}
            >
                {!showName ? (
                    <Tooltip
                        title={name}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <motion.img
                            src={src}
                            className="image"
                            whileHover={{ scale: 1.2 }}
                            alt="list of icons that can be used as pieces"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </Tooltip>
                ) : (
                    <motion.img
                        src={src}
                        className="image"
                        whileHover={{ scale: 1.175 }}
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
