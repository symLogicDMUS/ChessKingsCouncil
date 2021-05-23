import React from "react";
import {HelpSlide} from "../HelpSlide";
import {Typography} from "@material-ui/core";
import {SeeExampleButton} from "../SeeExampleButton";
import {useStyles as useMoreStyles} from "../HelpText.jss";

function PuttingThePieceICreatedIntoAGame(props) {
    const classes2 = useMoreStyles({theme: props.theme});

    const ex1 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/go-new-game.gif'}
        lgSrc={'/Images/help/wide/go-new-game.gif'}
    />

    const ex2 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/game name.png'}
        lgSrc={'/Images/help/wide/game name.png'}
    />

    const ex3 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/game name text field.png'}
        lgSrc={'/Images/help/wide/game name text field.png'}
    />

    const ex4 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/pick type.png'}
        lgSrc={'/Images/help/wide/pick type.png'}
    />

    const ex5 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/custom option select.png'}
        lgSrc={'/Images/help/wide/custom option select.png'}
    />

    const ex6 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/play as.png'}
        lgSrc={'/Images/help/wide/play as.png'}
    />

    const ex7 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/player type dropdown.png'}
        lgSrc={'/Images/help/wide/player type dropdown.png'}
    />

    const ex8 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/play button.png'}
        lgSrc={'/Images/help/wide/play button.png'}
    />

    const ex9 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/customize.png'}
        lgSrc={'/Images/help/wide/customize.png'}
    />

    const ex10 = <SeeExampleButton
        theme={props.theme}
        smSrc={'/Images/help/thin/subbing piece.gif'}
        lgSrc={'/Images/help/wide/subbing piece.gif'}
    />

    return <HelpSlide
        onClose={props.onClose}
        title={props.title}
        theme={props.theme}
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
                    lgSrc={"Images/help/wide/sub buttons.png"}
                    smSrc={"Images/help/wide/sub buttons.png"}
                >
                    On large screens the sub options are 4 icons: Queen, Rook, Knight, and Bishop.
                </SeeExampleButton>
                <SeeExampleButton
                    isText={true}
                    theme={props.theme}
                    lgSrc={"Images/help/thin/subs dropdown.png"}
                    smSrc={"Images/help/thin/subs dropdown.png"}
                >
                    On smaller screens the 4 icons are in a dropdown.
                </SeeExampleButton>
                <SeeExampleButton
                    theme={props.theme}
                    smSrc={'/Images/help/thin/subbing piece.gif'}
                    lgSrc={'/Images/help/wide/subbing piece.gif'}
                />
            </Typography>
        </Typography>
        <Typography className={classes2.text}>
            The game starts with your piece in place of the piece you subbed for.
            <SeeExampleButton
                theme={props.theme}
                smSrc={'/Images/help/thin/dragon-sub-queen.png'}
                lgSrc={'/Images/help/wide/dragon-sub-queen.png'}
            />
        </Typography>
    </HelpSlide>;
}

export default PuttingThePieceICreatedIntoAGame;