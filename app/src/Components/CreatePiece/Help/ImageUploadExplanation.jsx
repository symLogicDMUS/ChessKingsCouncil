import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { ImgWindowExamples } from "./ImgWindowExamples";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import { useStyles as useMoreStyles } from "../../Reuseables/NavBar/SubTitle.jss";
import { useStyles as useEvenMoreStyles } from "../../Reuseables/NavBar/Help/HelpText.jss";
import { useStyles } from "./ImageUploadExplanation.jss";
import { SeeExampleButton } from "../../Reuseables/NavBar/Help/SeeExampleButton";

export function ImageUploadExplanation(props) {
    const classes = useStyles({ theme: props.theme });
    const classes3 = useEvenMoreStyles({ theme: props.theme });
    return (
        <>
            <Typography className={classes3.text} paragraph>
                Click
                <SeeExampleButton
                    lgSrc={"/Images/Help/wide/image windows.png"}
                    smSrc={"/Images/Help/wide/image windows.png"}
                    theme={props.theme}
                    isText={true}
                >
                    the white or black image window
                </SeeExampleButton>
                to choose the white or black image for your piece. On smaller
                screens
                <SeeExampleButton
                    smSrc={"/Images/Help/thin/image icon.png"}
                    lgSrc={"/Images/Help/thin/image icon.png"}
                    theme={props.theme}
                    isText={true}
                >
                    the image icon{" "}
                    <WallpaperIcon
                        className={clsx(classes.icon, {
                            [classes.icon_adjust]: true,
                        })}
                    />
                </SeeExampleButton>
                in the right hand side icons column will bring up the image
                windows.
            </Typography>
            <Typography paragraph>
                <ImgWindowExamples theme={props.theme} />
            </Typography>
            <Typography className={classes3.text} paragraph>
                The image of a piece can be any{" "}
                <i className={classes3.emphasis}>.jpg</i>{" "}
                <i className={classes3.emphasis}>.JPG</i>{" "}
                <i className={classes3.emphasis}>.jpeg</i>{" "}
                <i className={classes3.emphasis}>.JPEG</i>{" "}
                <i className={classes3.emphasis}>.png</i>{" "}
                <i className={classes3.emphasis}>.PNG</i>{" "}
                <i className={classes3.emphasis}>.svg</i> or{" "}
                <i className={classes3.emphasis}>.SVG</i> image. Images don't
                have to be square dimensions, and should keep their proportions.
                Anywhere that an image appears on the site, if the image is
                taller than it is wide than it will be displayed with its height
                95% the length of the square, and if it is wider than it is tall
                than it will be displayed with its width 95% the length of the
                square. The following guidelines are recommended for picking an
                image:
            </Typography>
            <Typography className={classes3.text} paragraph>
                <ol className={classes.number_list}>
                    <li>
                        Don't pick images you've used for other pieces. If you
                        do, don't use both pieces in the same game unless you're
                        trying to be confusing.
                    </li>
                    <li>
                        Pick 2 images that look similar but are colored
                        differently.
                    </li>
                    <li>
                        Don't pick an image that looks like a piece from regular
                        Chess, especially if you're not going to substitute it
                        for that piece.
                    </li>
                    <li>
                        Images that contain transparency, and/or are{" "}
                        <div className={classes3.emphasis}>.svg</div> files
                        probably look better when playing.
                    </li>
                </ol>
            </Typography>
        </>
    );
}
