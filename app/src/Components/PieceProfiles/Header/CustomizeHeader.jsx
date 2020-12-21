import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { CheckBox } from "../../Reuseables/CheckBox";
import { Radio } from "@material-ui/core";
import { themes } from "../../styles/themes.jss";
import SvgIcon from "@material-ui/core/SvgIcon";
import { icons } from "../../styles/icons/top/icons.jss";
import RadioButtonsGroup from "../../Reuseables/RadioButtonsGroup";
import { fontSizeAlt2 as fontSize } from "../../styles/fontSize.jss";
import {promo_checkbox, checkbox_root, sub_buttons, useStyles} from "./CustomizeHeader.jss";

export function CustomizeHeader({
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    theme,
}) {
    let [subSelection, setSubSelection] = useState("");

    const classes = useStyles({ theme: theme, fontSize: fontSize });

    const handleSubSelection = (newSubSelection) => {
        setSubSelection(newSubSelection);
        toggleSub(pieceName, subSelection);
    };

    let isOverride =
        newReplacement != null &&
        pieceName !== newReplacement &&
        newReplaced === subSelection;

    return (
        <div className={classes.header}>
            <Typography className={classes.header_text}>{pieceName}</Typography>
            <Box className={classes.box}>
                <CheckBox
                    labelText="Promotion"
                    theme={theme}
                    clickMethod={togglePromo}
                    clickValue={pieceName}
                    checkmarkState={isCheckmark}
                    style={promo_checkbox(fontSize*1.2, theme)}
                    rootStyle={checkbox_root(fontSize)}
                />
            </Box>
            <RadioButtonsGroup
                theme={theme}
                groupName="sub buttons"
                ariaLabel="sub-buttons"
                isOverride={isOverride}
                style={sub_buttons(fontSize)}
                updateParent={handleSubSelection}
                defaultValue="none"
                buttons={[
                    <Radio
                        value="none"
                        name="None"
                        className={classes.sub_button}
                        icon={
                            <Typography
                                style={{ color: themes[theme].outline }}
                            >
                                None
                            </Typography>
                        }
                        checkedIcon={
                            <Typography style={{ color: themes[theme].text }}>
                                None
                            </Typography>
                        }
                    />,
                    <Radio
                        value="queen"
                        name="Queen"
                        className={classes.sub_button}
                        icon={
                            <SvgIcon className={classes.sub_icon}>
                                {icons.queen_outline(themes[theme].outline)}
                            </SvgIcon>
                        }
                        checkedIcon={
                            <SvgIcon
                                className={classes.sub_icon}
                                htmlColor={themes[theme].text}
                            >
                                {icons.queen_filled}
                            </SvgIcon>
                        }
                    />,
                    <Radio
                        value="rook"
                        name="Rook"
                        className={classes.sub_button}
                        icon={
                            <SvgIcon className={classes.sub_icon}>
                                {icons.rook_outline(themes[theme].outline)}
                            </SvgIcon>
                        }
                        checkedIcon={
                            <SvgIcon
                                htmlColor={themes[theme].text}
                                className={classes.sub_icon}
                            >
                                {icons.rook_filled}
                            </SvgIcon>
                        }
                    />,
                    <Radio
                        value="knight"
                        name="Knight"
                        className={classes.sub_button}
                        icon={
                            <SvgIcon className={classes.sub_icon}>
                                {icons.knight_outline(themes[theme].outline)}
                            </SvgIcon>
                        }
                        checkedIcon={
                            <SvgIcon
                                htmlColor={themes[theme].text}
                                className={classes.sub_icon}
                            >
                                {icons.knight_filled}
                            </SvgIcon>
                        }
                    />,
                    <Radio
                        value="bishop"
                        name="Bishop"
                        className={classes.sub_button}
                        icon={
                            <SvgIcon className={classes.sub_icon}>
                                {icons.bishop_outline(themes[theme].outline)}
                            </SvgIcon>
                        }
                        checkedIcon={
                            <SvgIcon
                                htmlColor={themes[theme].text}
                                className={classes.sub_icon}
                            >
                                {icons.bishop_filled}
                            </SvgIcon>
                        }
                    />,
                ]}
            />
        </div>
    );
}
