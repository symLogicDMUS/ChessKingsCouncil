import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { MuiTextField } from "../../Reuseables/UserInput/MuiTextField";
import { ReactComponent as Title } from "./svg/text/Game Name.svg";
import { useStyles as useMoreStyles } from "../NewGame.jss";
import { themes } from "../../styles/themes/themes.jss";
import { svgStyle } from "../../styles/svgStyle.jss";
import { useStyles } from "./GameName.jss";

function GameName(props) {
    const { gameName, setGameName, theme, ...other } = props;

    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles();

    return (
        <Box className={clsx(classes2.item, { [classes.root]: true })}>
            <Title
                style={svgStyle}
                className={classes2.title}
                fill={themes[theme].text_alt3}
            />
            <MuiTextField
                {...other}
                autoFocus
                fullWidth={true}
                value={gameName}
                variant="filled"
                id="pick-game-name"
                label="Pick game name"
                onChange={setGameName}
                className={classes.game_name}
            />
        </Box>
    );
}

export default GameName;
