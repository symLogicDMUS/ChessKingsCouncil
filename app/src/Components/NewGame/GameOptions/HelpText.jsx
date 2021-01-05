import React from "react";
import {v4 as uuidv4} from 'uuid';
import Typography from "@material-ui/core/Typography";
import {help_text, help_title} from "../../Reuseables/NavBar/HelpText.jss";

export const HelpTitle = (fontSize, theme) => (
    <Typography variant="h6" style={{...help_title(fontSize, theme)}}>
        Choices for a New Game
    </Typography>
)

export const HelpText = (fontSize, theme) => ([
     <Typography key={uuidv4()} paragraph={true} style={help_text(fontSize, theme)}>
        <p>The Site Has 3 Types of Games:</p>
        <ol>
            <li><i>Standard</i>: Regular Chess. Chess is played by millions of people all over the world.</li>
            <li>
                <i>Custom</i>: Use pieces that you created in your game. You created a piece by deciding how it moves
                and
                what it looks like, now decide how it’s going to be included in your game. Select this option to go to
                that page and then its help button for more information
            </li>
            <li>
                <i>Council</i>:A modification of Chess where it is possible to have multiple Kings. See the Council
                Rules
                page for more information.
            </li>
        </ol>
    </Typography>,
     <Typography key={uuidv4()} paragraph={true} style={help_text(fontSize, theme)}>
        <p>Picking a Name:</p>
        <p>
            Type the name of the game. The game is not saved until the Save or Save As button in used in the game. If
            you use the Save As button to give a different name than here, the name given here will be discarded.
        </p>
    </Typography>,
     <Typography key={uuidv4()} paragraph={true} style={help_text(fontSize, theme)}>
        <p>Player Type:</p>
        <p>
            You can play as black or white as usual, but there is also the 'Test' option, to test the game or pieces
            that you created to see if you like it, demonstrate a sequence of moves to someone, or in the developer's
            case
            check that a new feature works after it is updated/added.
        </p>
    </Typography>,
])