import React from "react";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import {Button, Typography} from "@material-ui/core";
import {useStyles} from "./NavBarButton.jss";


export function NavBarButtonExample({
                                 currentPage,
                                 screenCase,
                                 theme,
                             }) {

    const classes = useStyles({
        theme: theme,
        currentPage: currentPage,
        screenCase: screenCase
    });

    return (
        <>
            <Button className={classes.nav_bar_button}>
                <Box className={classes.box}>
                    <SvgIcon className={classes.icon}
                    >
                        {/*{icons[pageIcon]}*/}
                    </SvgIcon>
                    <Typography className={classes.text}>
                        {/*{pageName}*/}
                    </Typography>
                </Box>
            </Button>
        </>
    );
}