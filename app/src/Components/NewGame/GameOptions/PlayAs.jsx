import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { CheckBox } from "../../Reuseables/CheckBox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PlayAsDropdown from "../Customize/Bottom/PlayAsDropdown";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles, dropdown} from "./PlayAs.jss";
import { Typography } from "@material-ui/core";
import { getColorLetter } from "../../helpers/getColorLetter";
import {Dropdown} from "../../Reuseables/Dropdown";

export function PlayAs({ setPlayerType, playerType, fontSize }) {

    const classes = useStyles({ fontSize: fontSize, text: "Play As" });
    const dropdownStyle = dropdown(fontSize);

    useEffect(() => {
        document.body.className = "play-as-body";
    });

    return (
        <>
            <Typography className={classes.title}>Play As</Typography>
            <Dropdown
                updateParent={(selected) => getColorLetter(selected)}
                list={[
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>,
                    <MenuItem value="Test">Test</MenuItem>,
                    <MenuItem value="White">White</MenuItem>,
                    <MenuItem value="Black">Black</MenuItem>,
                ]}
                overwrite={null}
                styles={dropdownStyle}
            />
            {/*<PlayAsDropdown setPlayerType={setPlayerType} updateParent={(selected) => getColorLetter(selected)} />*/}
            {/*<FormControl component="fieldset">*/}
            {/*    <RadioGroup value={playerType} onChange={setPlayerType}>*/}
            {/*        <FormControlLabel*/}
            {/*            value="Test"*/}
            {/*            classes={{ root: classes.test }}*/}
            {/*            control={*/}
            {/*                <Radio*/}
            {/*                    checked={playerType === "Test"}*/}
            {/*                    checkedIcon={*/}
            {/*                        <RadioButtonCheckedRoundedIcon classes={{ root: classes.radio_button }} />*/}
            {/*                    }*/}
            {/*                    icon={<RadioButtonUncheckedRoundedIcon classes={{ root: classes.radio_button }} />}*/}
            {/*                />*/}
            {/*            }*/}
            {/*            label={*/}
            {/*                <FormLabel className={classes.label} style={text}>*/}
            {/*                    Test*/}
            {/*                </FormLabel>*/}
            {/*            }*/}
            {/*        />*/}
            {/*        <FormControlLabel*/}
            {/*            value="White"*/}
            {/*            classes={{ root: classes.white }}*/}
            {/*            control={*/}
            {/*                <Radio*/}
            {/*                    checked={playerType === "White"}*/}
            {/*                    checkedIcon={*/}
            {/*                        <RadioButtonCheckedRoundedIcon classes={{ root: classes.radio_button }} />*/}
            {/*                    }*/}
            {/*                    icon={<RadioButtonUncheckedRoundedIcon classes={{ root: classes.radio_button }} />}*/}
            {/*                />*/}
            {/*            }*/}
            {/*            label={*/}
            {/*                <FormLabel className={classes.label} style={text}>*/}
            {/*                    White*/}
            {/*                </FormLabel>*/}
            {/*            }*/}
            {/*        />*/}
            {/*        <FormControlLabel*/}
            {/*            value="Black"*/}
            {/*            classes={{ root: classes.black }}*/}
            {/*            control={*/}
            {/*                <Radio*/}
            {/*                    checked={playerType === "Black"}*/}

            {/*                    checkedIcon={*/}
            {/*                        <RadioButtonCheckedRoundedIcon classes={{ root: classes.radio_button }} />*/}
            {/*                    }*/}
            {/*                    icon={<RadioButtonUncheckedRoundedIcon classes={{ root: classes.radio_button }} />}*/}
            {/*                />*/}
            {/*            }*/}
            {/*            label={*/}
            {/*                <FormLabel className={classes.label} style={text}>*/}
            {/*                    Black*/}
            {/*                </FormLabel>*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </RadioGroup>*/}
            {/*</FormControl>*/}
        </>
    );
}
