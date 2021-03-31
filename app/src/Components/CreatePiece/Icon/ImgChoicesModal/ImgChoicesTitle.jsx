import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { SearchBox } from "../../../Reuseables/UserInput/SearchBox";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { SeeMore } from "../../../Reuseables/UserInput/SeeMore";
import {searchBackgroundColor, useStyles} from "./ImgChoicesTitle.jss";

export function ImgChoicesTitle({ theme, updateSearchText }) {
    const classes = useStyles({ theme: theme });

    return (
        <Box className={classes.title_area}>
            <Box className={classes.title_box}>
                <Typography className={classes.title}>Images</Typography>
                <WallpaperIcon className={classes.title_icon} size="small" />
            </Box>
            <MediaQuery maxWidth={600}>
                <SeeMore
                    theme={theme}
                    icon={
                        <ImageSearchIcon
                            className={clsx(classes.search_icon, {
                                [classes.medium_icon]: true,
                            })}
                        />
                    }
                    style={searchBackgroundColor(theme)}
                >
                    <SearchBox
                        theme={theme}
                        className={classes.search}
                        updateSearchText={updateSearchText}
                        icon={
                            <ImageSearchIcon
                                className={clsx(classes.search_icon, {
                                    [classes.small_icon]: true,
                                })}
                            />
                        }
                    />
                </SeeMore>
            </MediaQuery>
            <MediaQuery minWidth={600}>
                <SearchBox
                    theme={theme}
                    className={classes.search}
                    updateSearchText={updateSearchText}
                    icon={
                        <ImageSearchIcon
                            className={clsx(classes.search_icon, {
                                [classes.small_icon]: true,}
                                )}
                        />
                    }
                />
            </MediaQuery>
        </Box>
    );
}
