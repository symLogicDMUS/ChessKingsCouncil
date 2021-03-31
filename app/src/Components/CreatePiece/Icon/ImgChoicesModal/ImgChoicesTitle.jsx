import React from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import {SearchBox} from "../../../Reuseables/UserInput/SearchBox";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import {SeeMore} from "../../../Reuseables/UserInput/SeeMore";
import { useStyles } from "./ImgChoicesTitle.jss";
import clsx from "clsx";

export function ImgChoicesTitle({theme, updateSearchText}) {

    const classes = useStyles({theme: theme});

    return <Box className={classes.title_area}>
        <Box className={classes.title_box}>
            <Typography className={classes.title}>Images</Typography>
            <WallpaperIcon className={classes.title_icon} size="small"/>
        </Box>
        <MediaQuery maxWidth={600}>
            <SeeMore theme={theme} icon={<ImageSearchIcon className={
                clsx(classes.search_icon, {
                    [classes.mdSearchIcon]: true,
            })} />}>
                <SearchBox
                    theme={theme}
                    className={classes.search}
                    updateSearchText={updateSearchText}
                    icon={<ImageSearchIcon className={clsx(classes.search_icon, {
                        [classes.smSearchIcon]: true,
                    })}/>}
                />
            </SeeMore>
        </MediaQuery>
        <MediaQuery minWidth={600}>
            <SearchBox
                theme={theme}
                className={classes.search}
                updateSearchText={updateSearchText}
                icon={<ImageSearchIcon className={classes.search_icon}/>}
            />
        </MediaQuery>
    </Box>;
}