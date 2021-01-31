import React from "react";
import Typography from "@material-ui/core/Typography";
import {help_text} from "../../Reuseables/NavBar/HelpText.jss";
import {ImgWindowExamples} from "./ImgWindowExamples";
import {ImgButtonsExample} from "./ImgButtonsExample";
import { useStyles } from "../../Reuseables/SubTitle.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export function ImageUploadExplanation(props) {
    const classes = useStyles({theme: props.theme, fontSize: fontSize002});
    return <div>
        <Typography variant='h6' className={classes.sub_title}>Uploading an Image</Typography>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            Click of the image windows to upload an image from your computer or
            choose from an image already uploaded.
        </Typography>
        <ImgWindowExamples theme={props.theme}/>
        <Typography paragraph style={help_text(props.fontSize, props.theme)}>
            The image of a piece can be any image. An an image without square
            dimensions will be displayed with its width the length of a square.
            I recommend using the same image colored differently for white and
            black versions of the same piece.
        </Typography>
        <Typography style={help_text(props.fontSize, props.theme)}>
            <p>
                Choose images for the white and black versions of your piece.
                Click the Choose button to choose from a list of provided images
                or the Upload button to upload your own.
            </p>
        </Typography>
        <ImgButtonsExample theme={props.theme}/>
        <Typography style={help_text(props.fontSize, props.theme)}>
            <p>
                An image that is not square dimensions will be reformatted to
                be, so it can fit on a square. The following guidelines are
                recommended for picking an image:
            </p>
        </Typography>
        <Typography style={help_text(props.fontSize, props.theme)}>
            <ol>
                <li>
                    Don't pick images you've used for other pieces. If you do,
                    don't use both pieces in the same game unless you're trying
                    to be confusing.{" "}
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
    </div>;
}