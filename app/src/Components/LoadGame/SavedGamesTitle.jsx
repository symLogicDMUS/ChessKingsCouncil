import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import {SeeMore} from "../Reuseables/UserInput/SeeMore";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { searchBackgroundColor, useStyles} from "../Reuseables/Modals/MuiGridTitle.jss";
import SearchIcon from "@material-ui/icons/Search";
import {MoreVert, Storage} from "@material-ui/icons";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../styles/icons/top/icons.jss";

export function SavedGamesTitle({updateSearchText, theme}) {
    const classes = useStyles({theme});

    return (
        <Box className={classes.title_area}>
            <Box className={classes.title_box}>
                <Typography className={classes.title}>Load Game</Typography>
                <SvgIcon className={classes.title_icon}>
                    {icons.board_icon}
                </SvgIcon>
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
                            <MoreVert
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
                        <SearchIcon
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