import React from "react";
import {HelpSlide} from "../HelpSlide";
import {Typography} from "@material-ui/core";
import {SeeExampleButton} from "../SeeExampleButton";
import {useStyles as useMoreStyles} from "../HelpText.jss";

function PuttingThePieceICreatedIntoAGame(props) {
    const classes2 = useMoreStyles({theme: props.theme});

    return <HelpSlide
        onClose={props.onClose}
        title={props.title}
        theme={props.theme}
        updateTheme={props.updateTheme}
    >
        <Typography  className={classes2.text} paragraph>
            <ol>
                <li>
                    <div className={classes2.flex}>
                        Go to the New Game Page.
                        <SeeExampleButton
                            theme={props.theme}
                            lgSrc={'/Images/gif/wide/go-new-game-page.gif'}
                            smSrc={'/Images/gif/thin/go-new-game-page.gif'}
                        />
                    </div>
                </li>
                <li>In the Game Name text field, type any name.</li>
                <li>Under Pick Type, choose Custom option.</li>
                <li>Under the Play As dropdown, choose White or Black.</li>
                <li>Click the Play Button.</li>
                <SeeExampleButton
                    theme={props.theme}
                    smSrc={'/Images/gif/thin/new-game-options.gif'}
                    lgSrc={'/Images/gif/wide/new-game-options.gif'}
                    addedText={' (2-5)'}
                />
                <li>This will bring you to the Customize Game page. Scroll down to find your piece if necessary.</li>
                <li>Select one of the 4 options for Queen, Rook, Knight, or Bishop. </li>
                <li>click the OK button.</li>
            </ol>
            <Typography className={classes2.text} paragraph>
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/gif/wide/sub buttons.png"}
                    smSrc={"Images/gif/wide/sub buttons.png"}
                >
                    On large screens the sub options are 4 icons: Queen, Rook, Knight, and Bishop.
                </SeeExampleButton>
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/gif/thin/subs dropdown.png"}
                    smSrc={"Images/gif/thin/subs dropdown.png"}
                >
                    On smaller screens the 4 icons are in a dropdown.
                </SeeExampleButton>
                <SeeExampleButton
                    theme={props.theme}
                    smSrc={'/Images/gif/thin/subbing piece.gif'}
                    lgSrc={'/Images/gif/wide/subbing piece.gif'}
                    addedText={'(6-8)'}
                />
            </Typography>
        </Typography>
        <Typography className={classes2.text}>
            The game starts with your piece in place of the piece you subbed for.
            <SeeExampleButton
                theme={props.theme}
                smSrc={'/Images/gif/thin/dragon-sub-queen.jpg'}
                lgSrc={'/Images/gif/wide/dragon-sub-queen.jpg'}
            />
        </Typography>
    </HelpSlide>;
}

export default PuttingThePieceICreatedIntoAGame;