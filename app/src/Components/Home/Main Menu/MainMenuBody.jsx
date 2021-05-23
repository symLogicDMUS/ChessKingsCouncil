import React, {useEffect} from "react";
import Box from "@material-ui/core/Box";
import "../../styles/Background/_backgrounds.scss";
import {BoardPatternRow} from
        "../../styles/Background/BoardPatternRow";
import {SiteDescription} from "./SiteDescription";
import {useStyles} from "./MainMenuBody.jss";


export function MainMenuBody({theme}) {

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [])

    const classes = useStyles({theme: theme})

    const appTitlePath = `/Images/text/app title/title-${theme}.svg`;

    return (
        <div className={classes.main_menu_body}>
            <BoardPatternRow theme={theme} className={classes.row1}/>
            <Box className={classes.content}>
                <img
                    src={appTitlePath}
                    alt="home page text"
                    className={classes.site_title}
                />
                <SiteDescription theme={theme} />
            </Box>
            <BoardPatternRow theme={theme} className={classes.row2}/>
        </div>
    );
}