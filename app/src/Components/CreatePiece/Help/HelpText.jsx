import React from "react";
import {v4 as uuidv4} from "uuid";
import Box from "@material-ui/core/Box";
import {themes} from "../../styles/themes.jss";
import Typography from "@material-ui/core/Typography";
import {help_text, help_title} from "../../Reuseables/NavBar/HelpText.jss";
import {IncorrectNameEntryExamples} from "./IncorrectNameEntryExamples";
import {getSpanRangeBoardExample} from "./getSpanRangeBoardExample";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {fontSize002, fontSize00301} from "../../styles/fontSizes.jss";
import {ImgWindowExamples} from "./ImgWindowExamples";
import {ImgButtonsExample} from "./ImgButtonsExample";
import {RangeToolExample} from "./RangeToolExample";
import {offsetExample1} from "./offsetExample1";
import {offsetExample2} from "./offsetExample2";
import {getOffsetRangeBoardExample} from "./getOffsetRangeBoardExample";
import {fourLocationsBoard} from "./fourLocationBoard";
import {LocationButtonsExample} from "./LocationButtonsExample";
import {Load} from "../Options/Load";
import {Option} from "../Options/Option";
import {Button} from "@material-ui/core";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{...help_title(fontSize, theme)}}>
        Creating a Piece
    </Typography>
);

export const HelpText = (fontSize, theme) => [
    <div>
        <Typography key={uuidv4()} style={help_text(fontSize, theme)}>
            Create a Piece to use in a custom game. You can not use the name of
            one of the 6 regular pieces: Bishop, Knight, Rook, Queen, King, or
            Pawn. The name cannot contain the characters . # $ [ ] . The name
            cannot be left blank.
        </Typography>
        <IncorrectNameEntryExamples theme={theme}/>
    </div>,
    <div>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            Click of the image windows to upload an image from your computer or
            choose from an image already uploaded.
        </Typography>
        <ImgWindowExamples theme={theme}/>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            The image of a piece can be any image. An an image without square
            dimensions will be displayed with its width the length of a square.
            I recommend using the same image colored differently for white and
            black versions of the same piece.
        </Typography>
        <Typography key={uuidv4()} style={help_text(fontSize, theme)}>
            <p>
                Choose images for the white and black versions of your piece.
                Click the Choose button to choose from a list of provided images
                or the Upload button to upload your own.
            </p>
        </Typography>
        <ImgButtonsExample theme={theme}/>
        <Typography key={uuidv4()} style={help_text(fontSize, theme)}>
            <p>
                An image that is not square dimensions will be reformatted to
                be, so it can fit on a square. The following guidelines are
                recommended for picking an image:
            </p>
        </Typography>
        <Typography key={uuidv4()} style={help_text(fontSize, theme)}>
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
    </div>,
    <div>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                The range of a piece is how it can move. I define ranges as 2
                separate types: offsets and spans.
            </p>
            <p>
                Offsets are jumps: a Knight moves in offsets of 2 squares
                horizontal and 1 square vertical, or 1 square vertical and 2
                squares horizontal.
            </p>
        </Typography>
        <Box
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <img
                src={getOffsetRangeBoardExample({theme})}
                alt="offset board for docker"
                style={{
                    fontSize: fontSize00301,
                    width: "9em",
                    height: "9em",
                }}
            />
        </Box>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                Click on a square and the app will measure how many squares X to
                the left or right, plus how many squares Y up or down, that
                square is from the piece’s current position. This is the offset.
                Now wherever the piece is in a game, whichever square is that
                offset from the location is somewhere the piece can move. Click
                the same square again to remove the offset.
            </p>
        </Typography>

        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                Spans are how Rooks, Bishops, and Queens move. A span of up
                means that starting from the piece’s location, every square in
                front of the piece in its same column is a part of its range,
                until another piece blocks the way or the end of the board is
                reached. The spans listed in clockwise order are: up,
                upper-right, right, lower-right, down, lower-left, left,
                upper-left. Click an arrow key to add that span to the piece’s
                range and click it again to remove it.{" "}
            </p>
        </Typography>
        <Box
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <img
                src={getSpanRangeBoardExample({theme})}
                alt="span board for dragon"
                style={{
                    fontSize: fontSize00301,
                    width: "9em",
                    height: "9em",
                }}
            />
            <RangeToolExample theme={theme}/>
        </Box>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                When you add an offset or a span to your piece, you are adding
                it to the white version of the piece. The black version becomes
                the “mirror image” of what you added. For example, when you
                click the up arrow, <i>down</i> is added to the black version of
                the piece automatically. This is done to prevent an unfair
                imbalance between white and black versions of the same piece,
                while still allowing for the same level of customization. For
                example, if you created a piece that could only move up, and
                then substituted this piece for any of Rook, Bishop, Queen, or
                Knight, than if white and black versions of pieces were defined
                the same, the black version of this piece would be useless.{" "}
            </p>
        </Typography>
        <Box
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            {offsetExample1(
                themes[theme].light_normal,
                themes[theme].dark_normal,
                themes[theme].offset,
                availHeight() * 0.25,
                availHeight() * 0.25
            )}
            {offsetExample2(
                themes[theme].light_normal,
                themes[theme].dark_normal,
                themes[theme].offset,
                availHeight() * 0.25,
                availHeight() * 0.25
            )}
        </Box>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                Another example off adding range is if you click the square that
                is 2 up and 1 to the left from the piece’s location, than “+2,
                -1” would be added to the white version of this piece, and “-2,
                +1” would be added to the black version.
            </p>
            <p>
                If a square on the board is part of a span, the word “span” is
                displayed on the square. If the square is part of an offset, the
                offset calculation is displayed on the square. The text
                displayed on squares can be turned off in the settings in the
                NavBar.
            </p>
        </Typography>
    </div>,
    <div>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                You can position the piece in one of 4 locations in the center
                of the board: D4, D5, E4, or E5.{" "}
            </p>
        </Typography>
        <Box
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-around",
            }}
        >
            {fourLocationsBoard(
                availHeight() * 0.25,
                availHeight() * 0.25,
                themes[theme].light_normal,
                themes[theme].dark_normal
            )}
        </Box>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                You can use the location buttons to switch to any of the 4
                locations at any time. You will be able to see how the piece can
                move from that location and add to its range from that location.
            </p>
        </Typography>
        <LocationButtonsExample theme={theme}/>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <p>
                These are the 4 squares that allow for the most symmetric
                customization. For example, if you have an offset of 2 squares
                up and 1 square to the right, you could also add the mirror of
                this: 2 squares down and 1 square to the left. The 4 squares in
                the center of the board are the 4 that you can add mirrors of
                offsets and spans the most often.{" "}
            </p>
            <p>
                Piece location is also restricted to these 4 squares when
                creating a piece to prevent situations in which the game would
                be over by default. An example of this would be positioning the
                piece at d1, adding an offset of 8 squares up and 1 square to
                the right, and then substituting your piece for the Queen in
                your game. Since the black version of the piece is the mirror
                image of the white version, the white and black King would also
                be trapped, creating a situation where both Kings are checkmated
                at the same time. This is an impossible situation in regular
                Chess and has no definition. You could extend the definition of
                stalemate to include this, but regardless the game would be over
                before the first move.
            </p>
        </Typography>
    </div>,
    <div>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            <ul>
                <li>
                    <i>Load:</i> Opens a list of previously created pieces. You
                    also have the option to delete them. This is the same as the
                    'My Pieces' page
                    < br/>
                    <Option
                        iconType="load"
                        theme={theme}
                        key={uuidv4()}
                    />
                </li>
                <li>
                    <i>Save</i>: Saves the piece. You can now add the piece as a
                    Pawn promotion option or a substitute for a regular piece,
                    when starting a new game. The piece can't be saved if the
                    name or image icons are blank.
                    < br/>
                    <Option
                        iconType="save"
                        theme={theme}
                        key={uuidv4()}
                    />
                </li>
                <li>
                    <i>Reset</i>: If you loaded a previously created piece than
                    this will reset the piece's profile to the last time you
                    saved it. If you're editing a new piece, the Reset option is
                    the same as the Erase option.
                    < br/>
                    <Option
                        iconType="reset"
                        theme={theme}
                        key={uuidv4()}
                    />
                </li>
                <li>
                    <i>Erase:</i> The Erase option removes all ranges and makes
                    the name and image icons blank.
                    < br/>
                    <Option
                        iconType="erase"
                        theme={theme}
                        key={uuidv4()}
                    />

                </li>
            </ul>
        </Typography>
    </div>,
    <div>
        <Typography key={uuidv4()} paragraph style={help_text(fontSize, theme)}>
            Remember: You can return to the help menu any time through the Help
            option on the NavBar
            <Button className={{display: 'inline-block', borderRadius: 0, background: themes[theme].fill}}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '3em',
                }}>
                    <ContactSupportIcon style={{fontSize: fontSize002,}}/>
                    <Typography style={{color: themes[theme].outline}}>Help</Typography>
                </Box>
            </Button>
        </Typography>
    </div>,
];
