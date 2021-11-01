import React from "react";
import clsx from "clsx";
import { GameType } from "./GameType";
import Box from "@material-ui/core/Box";
import { ReactComponent as Standard } from "./svg/game types/Standard.svg";
import { ReactComponent as Custom } from "./svg/game types/Custom.svg";
import { ReactComponent as Title } from "./svg/text/Pick Type.svg";
import { useStyles as useMoreStyles } from "../NewGame.jss";
import { themes } from "../../styles/themes/themes.jss";
import { svgStyle } from "../../styles/svgStyle.jss";
import { gameTypeStyle, useStyles } from "./PickType.jss";

function PickType({ gameType, setGameType, theme }) {
    const classes = useStyles({ theme: theme });
    const classes2 = useMoreStyles();

    return (
        <Box
            className={clsx(classes2.item, {
                [classes.pick_type]: true,
            })}
        >
            <Title
                style={svgStyle}
                className={classes2.title}
                fill={themes[theme].text_alt3}
            />
            <Box className={classes.game_types}>
                <GameType
                    gameType="Custom"
                    setGameType={setGameType}
                    selectedType={gameType}
                    theme={theme}
                >
                    <Custom
                        style={gameTypeStyle}
                        className={clsx({
                            [classes.normal]: gameType !== "Custom",
                            [classes.selected]: gameType === "Custom",
                        })}
                    />
                </GameType>
                <div className={classes.game_types_divider} />
                <GameType
                    gameType="Standard"
                    setGameType={setGameType}
                    selectedType={gameType}
                    theme={theme}
                >
                    <Standard
                        style={gameTypeStyle}
                        className={clsx({
                            [classes.normal]: gameType !== "Standard",
                            [classes.selected]: gameType === "Standard",
                        })}
                    />
                </GameType>
            </Box>
        </Box>
    );
}

export default PickType;
