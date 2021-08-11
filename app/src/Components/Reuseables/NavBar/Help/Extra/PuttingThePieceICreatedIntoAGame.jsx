import React from "react";
import {HelpSlide} from "../HelpSlide";
import {Typography} from "@material-ui/core";
import {SeeExampleButton} from "../SeeExampleButton";
import {useStyles as useMoreStyles} from "../HelpText.jss";

function PuttingThePieceICreatedIntoAGame(props) {
    const classes2 = useMoreStyles({theme: props.theme});

    const ex1 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/go-new-game.gif'}
        lgSrc={'/Images/Help/wide/go-new-game.gif'}
    />

    const ex2 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/game name.png'}
        lgSrc={'/Images/Help/wide/game name.png'}
    />

    const ex3 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/game name text field.png'}
        lgSrc={'/Images/Help/wide/game name text field.png'}
    />

    const ex4 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/pick type.png'}
        lgSrc={'/Images/Help/wide/pick type.png'}
    />

    const ex5 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/custom option select.png'}
        lgSrc={'/Images/Help/wide/custom option select.png'}
    />

    const ex6 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/play as.png'}
        lgSrc={'/Images/Help/wide/play as.png'}
    />

    const ex7 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/player type dropdown.png'}
        lgSrc={'/Images/Help/wide/player type dropdown.png'}
    />

    const ex8 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/play button.png'}
        lgSrc={'/Images/Help/wide/play button.png'}
    />

    const ex9 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/customize.png'}
        lgSrc={'/Images/Help/wide/customize.png'}
    />

    const ex10 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/Help/thin/subbing piece.gif'}
        lgSrc={'/Images/Help/wide/subbing piece.gif'}
    />

    return <HelpSlide
        title={props.title}
        theme={props.theme}
        onClose={props.onClose}
        updateTheme={props.updateTheme}
    >
        <Typography  className={classes2.text} paragraph>
            <ol>
                <li>Go to the New Game page. {ex1}</li>
                <li>The page should be open to the Game Name tab. {ex2}</li>
                <li>In the Game Name text field, type any name. {ex3}</li>
                <li>Switch to the Pick Type tab. {ex4}</li>
                <li>Choose the Custom option. {ex5}</li>
                <li>Switch to the Player Type Tab. {ex6}</li>
                <li>Under the dropdown, choose White or Black. {ex7}</li>
                <li>Click the Play Button. {ex8} </li>
                <li>This will bring you to the Customize Game page.{ex9}</li>
                <li>Select one of the 4 options for Queen, Rook, Knight, or Bishop.{ex10}</li>
                <li>click the OK button.</li>
            </ol>
            <Typography className={classes2.text} paragraph>
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/Help/wide/sub buttons.png"}
                    smSrc={"Images/Help/wide/sub buttons.png"}
                >
                    On large screens the sub options are 4 icons: Queen, Rook, Knight, and Bishop.
                </SeeExampleButton>
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/Help/thin/subs dropdown.png"}
                    smSrc={"Images/Help/thin/subs dropdown.png"}
                >
                    On smaller screens the 4 icons are in a dropdown.
                </SeeExampleButton>
                <SeeExampleButton
                    theme={props.theme}
                    smSrc={'/Images/Help/thin/subbing piece.gif'}
                    lgSrc={'/Images/Help/wide/subbing piece.gif'}
                />
            </Typography>
        </Typography>
        <Typography className={classes2.text}>
            The game starts with your piece in place of the piece you subbed for.
            <SeeExampleButton
                theme={props.theme}
                smSrc={'/Images/Help/thin/dragon-sub-queen.png'}
                lgSrc={'/Images/Help/wide/dragon-sub-queen.png'}
            />
        </Typography>
    </HelpSlide>;
}

export default PuttingThePieceICreatedIntoAGame;