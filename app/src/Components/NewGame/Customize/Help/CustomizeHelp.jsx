import Typography from "@material-ui/core/Typography";
import {help_text} from "../../../Reuseables/NavBar/Help/HelpText.jss";
import BlockIcon from "@material-ui/icons/Block";
import {themes} from "../../../styles/themes.jss";
import {SubExample} from "./SubExample";
import {PromoCheckboxExample} from "./PromoCheckboxExample";
import React from "react";

export function CustomizeHelp(props) {
    return <Typography paragraph={true}>
        Customize a new game by adding pieces that you created to the game, as:
        <ol type="a">
            <li>
                substitutes for regular pieces. The substitute will start the
                game in the location the regular piece normally would. You can
                substitute for any piece besides Pawns and Kings. Icons of the
                Queen, Rook, Bishop and Knight appear in the profile header of
                each piece. Select the icon of the piece you want to substitute
                for. The <BlockIcon /> means that no sub is selected, and is the default.
            </li>
            <SubExample theme={props.theme}/>
            <li>
                A piece that a Pawn can be promoted to when it reaches the back
                row. A prompt will appear when a Pawn reaches the back row that
                includes the regular promotion pieces (Queen, Rook, Bishop
                Knight) in addition to your created pieces you added to this
                list. Promo pieces don't appear at the start of the game unless
                you also selected them as a sub. There is a maximum of 26 pieces
                total to a game, including all starting pieces and in the
                promotion list. You can check the 'Promo All' checkbox at the
                top of the window to add all your pieces to the list, but if you
                have more than 20 pieces than only the first 20 will be added.
            </li>
            <PromoCheckboxExample fontSize={props.fontSize} theme={props.theme}/>
        </ol>
        <p>
            Each game contains its own record of the pieces included in it,
            which doesn't change if the universal record of those pieces
            are modified/deleted after.
        </p>
    </Typography>;
}