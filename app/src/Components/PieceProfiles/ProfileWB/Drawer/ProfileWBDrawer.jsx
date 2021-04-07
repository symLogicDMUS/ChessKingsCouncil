import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import ProfileWBRangeVert from "./ProfileWBRangeVert";
import ProfileWBAvatarVert from "./ProfileWBAvatarVert";
import {useStyles} from "./ProfileWBDrawer.jss";
import {Typography} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Box from "@material-ui/core/Box";
import {getColorName} from "../../../helpers/getColorName";
import IconButton from "@material-ui/core/IconButton";

export function ProfileWBDrawer({theme, closeProfile, isActive, def, color, pieceName, screenCase}) {

    const classes = useStyles({theme});

    return (
        <div>
            <div className={clsx(classes.root, {
                [classes.root_inactive]: !isActive
            })}>
                <div className={classes.wrapper}>
                    <Slide direction="left" in={isActive} mountOnEnter unmountOnExit>
                        <Paper elevation={4} className={classes.paper}>
                            {isActive ? (
                                <div className={classes.profile_wb_drawer}>
                                    <Box className={classes.top_area}>
                                        <IconButton
                                            edge="end"
                                            onClick={closeProfile}
                                            className={classes.chevron_button}
                                        >
                                            <ChevronRightIcon className={classes.icon}/>
                                        </IconButton>
                                        <Typography
                                            noWrap
                                            variant="h6"
                                            className={classes.name_and_color}
                                        >
                                            {getColorName(color)} {pieceName}
                                        </Typography>
                                        <Box className={clsx(classes.chevron_button, {
                                            [classes.invisible]: true,
                                        })} />
                                    </Box>

                                    <ProfileWBAvatarVert
                                        src={def.img}
                                        color={color}
                                        theme={theme}
                                        pieceName={pieceName}
                                    />
                                    <ProfileWBRangeVert
                                        pieceName={pieceName}
                                        pieceImgUrl={def.img}
                                        range={def.spans}
                                        rangeType='span'
                                        color={color}
                                        theme={theme}
                                        screenCase={screenCase}
                                    />
                                    <ProfileWBRangeVert
                                        pieceName={pieceName}
                                        pieceImgUrl={def.img}
                                        range={def.offsets}
                                        rangeType='offset'
                                        color={color}
                                        theme={theme}
                                        screenCase={screenCase}
                                    />
                                </div>
                            ) : null}
                        </Paper>
                    </Slide>
                </div>
            </div>
        </div>
    );
}