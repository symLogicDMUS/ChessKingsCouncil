import React from "react";
import clsx from "clsx";
import {MoreVert} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import BlockIcon from "@material-ui/icons/Block";
import {themes} from "../../../styles/themes.jss";
import Typography from "@material-ui/core/Typography";
import {icons} from "../../../styles/icons/top/icons.jss";
import {InlinePromo} from "./InlinePromo";
import {useStyles as useMoreStyles}
    from "../../../Reuseables/NavBar/Help/HelpText.jss";
import {useStyles} from "./CustomizeHelp.jss";


export function CustomizeHelp(props) {
    const classes = useStyles({ theme: props.theme });
    const classes2 = useMoreStyles({ theme: props.theme });

    return (
        <>
            <Typography paragraph className={classes2.text}>
                Add a piece that you created into a game as either a substitute
                for a regular piece, or a piece that a Pawn can be promoted to
                when it reaches the opposite side of the board.
            </Typography>
            <Typography paragraph className={classes2.text}>
                A <div className={classes2.emphasis}>Sub</div> will start
                the game in the location the regular piece normally would. You
                can substitute for any piece besides Pawns and Kings. on larger
                screens, Icons of the Queen, Rook, Bishop and Knight appear in
                the profile header of each piece.
                <BlockIcon
                    className={clsx(classes.icon, {
                        [classes.block_icon]: true,
                    })}
                />
                <SvgIcon
                    className={clsx(classes.icon, {
                        [classes.sub_icon]: true,
                    })}
                >
                    {icons.queen_outline(themes[props.theme].text)}
                </SvgIcon>
                <SvgIcon
                    className={clsx(classes.icon, {
                        [classes.sub_icon]: true,
                    })}
                >
                    {icons.rook_outline(themes[props.theme].text)}
                </SvgIcon>
                <SvgIcon
                    className={clsx(classes.icon, {
                        [classes.sub_icon]: true,
                    })}
                >
                    {icons.knight_outline(themes[props.theme].text)}
                </SvgIcon>
                <SvgIcon
                    className={clsx(classes.icon, {
                        [classes.sub_icon]: true,
                    })}
                >
                    {icons.bishop_outline(themes[props.theme].text)}
                </SvgIcon>
                Select the icon of the piece you want your piece to start the game in place of. The
                <BlockIcon className={clsx(classes.icon, {
                    [classes.block_icon]: true
                })}/> means that no sub is selected and is the default. on smaller screens the sub options are in a dropdown.

            </Typography>
            <Typography className={classes2.text} paragraph>
                A <div className={classes2.emphasis}>Promo</div> is any piece that a Pawn can be promoted to when it
                reaches the opposite side of the board. check the <InlinePromo theme={props.theme} classes={classes2}>
                Promo</InlinePromo> checkbox in a piece's profile header to add it to the list of promos. You can also check
                the{" "}<InlinePromo theme={props.theme} classes={classes2}>Promo All</InlinePromo> checkbox in the page
                header to add all your pieces to the list, but if you have more than 20 pieces than only the first 20
                will be added. On smaller screens you need to use the <i>see more</i> <MoreVert className={classes.see_more_icon} />
                to access the checkboxes. A prompt will appear when a Pawn reaches the back row that includes the regular
                promotion pieces (Queen, Rook, Bishop Knight) in addition to your created pieces you added to this list.
                Promo pieces don't appear at the start of the game unless you also selected them as a sub.
            </Typography>
            <Typography className={classes2.text} paragraph>
                Each game contains its own record of the pieces included in it. If a piece is deleted from the list of
                all pieces (that can be included in a game), games already started won't be affected.
            </Typography>
        </>
    );
}
