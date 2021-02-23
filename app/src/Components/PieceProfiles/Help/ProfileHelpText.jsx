import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import MediaQuery from "react-responsive/src";
import {Typography} from "@material-ui/core";
import {SampleRangeList} from "./SampleRangeList";
import {SampleRangeBoard} from "./SampleRangeBoard";
import {ProfileExampleDocker} from "./ProfileExampleDocker";
import {IconButtonExample as Icb} from "./IconButtonExample";
import {help_text} from "../../Reuseables/NavBar/HelpText.jss";
import {fontSizes, subtitle, useStyles} from "./ProfileHelpText.jss";

export function ProfileHelpText(props) {

    const classes = useStyles({theme: props.theme});

    return <div className={classes.profile_help_text}>
        <Typography
            variant='h6'
            className={classes.flexbox}
            style={subtitle(props.fontSize, props.theme)}
        >
            Piece Profiles
        </Typography>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            The profile of a piece shows the image, spans, and offsets, for the white and black version of the piece. Each
            profile also has a header including the name and other content which differs depending on the page you're viewing
            it on. Below is the profile for a piece named 'Docker' (not including the header).
        </Typography>
        <ProfileExampleDocker theme={props.theme} />
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            Asymmetric pieces such as Docker shouldn't be used as Pawn promotions.
        </Typography>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            To view the real (text) definitions of the spans or offsets you can click the<Icb theme={props.theme}/> Icon at the top
            of the span or offset list to view a list of span or offset definitions with its own board diagram. Click any
            square on this diagram and it will change the location of the piece in the diagram. Click any of the definitions
            and it will highlight that definition from the current location. Below is an example after user clicked the span
            'Upper Right'.
        </Typography>
        <Box className={classes.flexbox} >
            <Box className={classes.partial_range_example}>
                <MediaQuery minDeviceWidth={1040}>
                    <SampleRangeBoard theme={props.theme} fontSize={fontSizes['desktop']} />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>
                    <SampleRangeBoard theme={props.theme} fontSize={fontSizes['mobile']} />
                </MediaQuery>
                <SampleRangeList theme={props.theme}/>
            </Box>
        </Box>
    </div>;
}