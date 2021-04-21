import React from "react";
import clsx from "clsx";
import {Grid} from "@material-ui/core";
import MediaQuery from "react-responsive/src";
import Typography from "@material-ui/core/Typography";
import {ImgWindowExamples} from "./ImgWindowExamples";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/SubTitle.jss";
import {useStyles as useEvenMoreStyles} from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./ImageUploadExplanation.jss";

export function ImageUploadExplanation(props) {
    const classes = useStyles({theme: props.theme});
    const classes2 = useMoreStyles({theme: props.theme});
    const classes3 = useEvenMoreStyles({theme: props.theme})
    return (
        <div>
            <Typography variant='subtitle2' className={classes2.sub_title}>Uploading an Image</Typography>
            <MediaQuery maxWidth={960}>
                <Grid container direction="row" alignItems="center" className={classes.sentence}>
                    <Grid item>
                        <Typography className={classes3.text}>The Image icon on the right side will bring up the image windows.</Typography>
                    </Grid>
                    <Grid item>
                        <WallpaperIcon className={classes.icon} />
                    </Grid>
                </Grid>
            </MediaQuery>
            <Typography className={classes3.text} paragraph>
                Click the white or black image window to choose the white or black image for your piece
            </Typography>
            <Typography paragraph>
                <ImgWindowExamples theme={props.theme}/>
            </Typography>
            <Typography className={classes3.text} paragraph>
                The image of a piece can be any image. An an image without square
                dimensions will be displayed with its width the length of a square.
                I recommend using the same image colored differently for white and
                black versions of the same piece.
            </Typography>
            <Typography className={classes3.text} paragraph>
                An image that is not square dimensions will be reformatted to
                be, so it can fit on a square. The following guidelines are
                recommended for picking an image:
            </Typography>
            <Typography className={classes3.text} paragraph>
                <ol>
                    <li>
                        Don't pick images you've used for other pieces. If you do,
                        don't use both pieces in the same game unless you're trying
                        to be confusing.
                    </li>
                    <li>
                        Pick 2 images that look similar but are colored differently.
                    </li>
                    <li>
                        Don't pick an image that looks like a piece from regular
                        Chess, especially if you're not going to substitute it for
                        that piece.
                    </li>
                    <li>
                        Images that contain transparency, and/or are .svg files
                        probably look better when playing.
                    </li>
                </ol>
            </Typography>
        </div>
    );
}