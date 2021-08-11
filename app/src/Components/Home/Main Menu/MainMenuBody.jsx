import React, { useEffect } from "react";
import { appTitle } from "./appTitle";
import Box from "@material-ui/core/Box";
import "../../styles/Background/_backgrounds.scss";
import { BoardPatternRow } from "../../styles/Background/BoardPatternRow";
import { SiteDescription } from "./SiteDescription";
import { useStyles, initial } from "./MainMenuBody.jss";

export function MainMenuBody({ theme }) {
    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, []);

    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.main_menu_body}>
            <Box className={classes.content}>
                <SiteDescription theme={theme} />
            </Box>
        </div>
    );
}
