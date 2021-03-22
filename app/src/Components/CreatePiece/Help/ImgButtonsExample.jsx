import React from "react";
import Box from "@material-ui/core/Box";
import {fontSize002} from "../../styles/fontSizes.jss";
import {MuiButton as Button} from "../../Reuseables/Clickables/MuiButton";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import {button, useStyles} from "../Icon/ImgButtonsModal.jss";

export function ImgButtonsExample({theme}) {
    const classes = useStyles({theme});
    return (
        <Box style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box className={classes.window}
                 style={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'nowrap',
                     alignItems: 'center',
                     justifyContent: 'space-evenly',
                 }}>
                <Box className={classes.button_group}>
                    <Button
                        variant='contained'
                        startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}
                        classProp={classes.button}
                        addedClassProp={classes.upload_button}
                        theme={theme}
                    >
                        Upload
                    </Button>
                    <Button
                        variant='contained'
                        startIcon={<InsertPhotoIcon fontSize={"inherit"}/>}
                        classProp={classes.button}
                        addedClassProp={classes.choose_button}
                        theme={theme}
                    >
                        Choose
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}