import React from "react";
import { Option } from "./Option";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./Options.jss";
import { v4 as uuidv4 } from "uuid";
import MediaQuery from "react-responsive/src";

export function Options({ save, reset, toggleLoadModal, eraseRange, theme }) {
    const classes = useStyles({ theme: theme, fontSize: fontSize });
    return (
        <div className={classes.options_tool}>
            <Box className={classes.options_flexbox}>
                <MediaQuery minDeviceWidth={768}>
                    <Typography className={classes.title}>Options</Typography>
                </MediaQuery>
                <Option
                    clickMethod={toggleLoadModal}
                    iconType="load"
                    theme={theme}
                    key={uuidv4()}
                />
                <Option
                    clickMethod={save}
                    iconType="save"
                    theme={theme}
                    key={uuidv4()}
                />
                <Option
                    clickMethod={reset}
                    iconType="reset"
                    theme={theme}
                    key={uuidv4()}
                />
                <Option
                    clickMethod={eraseRange}
                    iconType="erase"
                    theme={theme}
                    key={uuidv4()}
                />
            </Box>
        </div>
    );
}
