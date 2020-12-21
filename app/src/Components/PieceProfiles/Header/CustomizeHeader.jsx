import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import { CheckBox } from "../../Reuseables/CheckBox";
import { icons } from "../../styles/icons/top/icons.jss";
import { fontSizeAlt2 as fontSize } from "../../styles/fontSize.jss";
import { themes } from "../../styles/themes.jss";
import RadioButtonsGroup from "../../Reuseables/RadioButtonsGroup";
import { promo_checkbox, sub_buttons, useStyles } from "./CustomizeHeader.jss";

export function CustomizeHeader({
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    theme,
    style,
}) {
    let [subSelection, setSubSelection] = useState("");

    const classes = useStyles({
        theme: theme,
        fontSize: fontSize,
        style: style,
    });

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
            <Box className={classes.piece_name_container}>
                <Typography className={classes.piece_name}>
                    {pieceName}
                </Typography>
            </Box>
            <Box className={classes.options_container}>
                <CheckBox
                    clickMethod={togglePromo}
                    clickValue={pieceName}
                    checkmarkState={isCheckmark}
                    style={promo_checkbox(fontSize)}
                    theme={theme}
                    labelText="Promotion"
                />
            </Box>
            <Box className={classes.options_container}>
                <Typography className={classes.dropdown_label}>
                    Sub For:
                </Typography>
                <RadioButtonsGroup
                    theme={theme}
                    groupName="sub buttons"
                    ariaLabel="sub-buttons"
                    isOverride={isOverride}
                    style={sub_buttons(fontSize)}
                    updateParent={handleSubSelection}
                    defaultValue='none'
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
                                <Typography
                                    style={{ color: themes[theme].text }}
                                >
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
                                    {icons.knight_outline(
                                        themes[theme].outline
                                    )}
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
                                    {icons.bishop_outline(
                                        themes[theme].outline
                                    )}
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
            </Box>
        </div>
    );
}

/* Alt with labels
buttons={[
        // <Radio value="none" name="None" htmlColor={themes[theme].text} />,
        <FormControlLabel
            control={
                <Radio
                    value="queen"
                    name="Queen"
                    className={classes.sub_button}
                    icon={
                        <SvgIcon className={classes.sub_icon}>
                            {icons.queen_outline(
                                themes[theme].outline
                            )}
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
                />
            }
            label={<Typography className={classes.sub_label}>Queen</Typography>}
            labelPlacement="start"
        />,
        <FormControlLabel
            control={
                <Radio
                    value="rook"
                    name="Rook"
                    className={classes.sub_button}
                    icon={
                        <SvgIcon className={classes.sub_icon}>
                            {icons.rook_outline(
                                themes[theme].outline
                            )}
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
                />
            }
            labelPlacement="start"
            label={<Typography className={classes.sub_label}>Rook</Typography>}
        />,
        <FormControlLabel
            control={
                <Radio
                    value="knight"
                    name="Knight"
                    className={classes.sub_button}
                    icon={
                        <SvgIcon className={classes.sub_icon}>
                            {icons.knight_outline(
                                themes[theme].outline
                            )}
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
                />
            }
            labelPlacement="start"
            label={<Typography className={classes.sub_label}>Knight</Typography>}
        />,
        <FormControlLabel
            control={
                <Radio
                    value="bishop"
                    name="Bishop"
                    className={classes.sub_button}
                    icon={
                        <SvgIcon className={classes.sub_icon}>
                            {icons.bishop_outline(
                                themes[theme].outline
                            )}
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
                />
            }
            labelPlacement="start"
            label={<Typography className={classes.sub_label}>Bishop</Typography>}
        />,
    ]}
 */
