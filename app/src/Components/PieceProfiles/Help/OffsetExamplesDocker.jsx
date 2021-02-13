import React from "react";
import {getOffsetRangeBoardDockerExample} from "./getOffsetRangeBoardDockerExample";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./ProfileHelpText.jss";

export const OffsetExamplesDocker = ({theme}) => {

    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.flexbox}>
            <Box className={classes.item}>
                <Box className={classes.header}>
                    <IconButton
                        className={classes.expand_widget}
                    >
                        <AddIcon
                            className={classes.expand_icon}
                        />
                    </IconButton>
                    <Typography
                        className={classes.range_title}
                        noWrap
                    >
                        White Offsets
                    </Typography>
                </Box>
                <Box className={classes.window}>
                    <img src={getOffsetRangeBoardDockerExample(theme, 'W')} className={classes.board_img} alt='range of piece shown as board' />
                </Box>
            </Box>
            <Box className={classes.item}>
                <Box className={classes.header}>
                    <IconButton
                        className={classes.expand_widget}
                    >
                        <AddIcon
                            className={classes.expand_icon}
                        />
                    </IconButton>
                    <Typography
                        className={classes.range_title}
                        noWrap
                    >
                        Black Offsets
                    </Typography>
                </Box>
                <Box className={classes.window}>
                    <img src={getOffsetRangeBoardDockerExample(theme, 'B')} className={classes.board_img} alt='range of piece shown as board' />
                </Box>
            </Box>
        </div>
    );
}
