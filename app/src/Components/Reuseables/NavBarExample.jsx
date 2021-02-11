import React from "react";
import Box from "@material-ui/core/Box";
import {NavBarButtonExample} from "./NavBarButtonExample";
import {useStyles} from "./NavBar/NavBar.jss"


export function NavBarExample(props) {

    const classes = useStyles({currentPage: props.currentPage, screenCase: props.screenCase});

    return (
        <>
            <Box className={classes.nav_bar} >
                {(Array.from(new Array(8))).map((index) => (
                    <NavBarButtonExample
                        key={index}
                        theme={props.theme}
                        currentPage={props.currentPage}
                        screenCase={props.screenCase}
                    />
                ))}
            </Box>
        </>
    );
}
