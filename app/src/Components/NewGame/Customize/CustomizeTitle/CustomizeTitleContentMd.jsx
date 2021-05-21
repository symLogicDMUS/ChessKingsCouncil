import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SignInOutButton from "../../../Home/SignInOutButton";
import {SeeMore} from "../../../Reuseables/UserInput/SeeMore";
import {PageTitle} from "../../../Reuseables/AppBar/PageTitle";
import {SearchBox} from "../../../Reuseables/UserInput/SearchBox";
import {MuiCheckbox} from "../../../Reuseables/Clickables/MuiCheckbox";
import {useStyles as useMoreStyles} from "../CustomizeTitle.jss";
import { useStyles } from "./CustomizeTitleContentMd.jss";

export function CustomizeTitleContentMd(props) {
    const {theme, className, promoAllClick, updateSearchText, ...other} = props;

    const classes = useStyles({theme});
    const classes2 = useMoreStyles({theme});

    return <>
        <Box
            className={clsx(classes.content, {
                [className]: className
            })}
            {...other}
        >
            <PageTitle theme={theme} className={classes2.title}>
                Customize Game
            </PageTitle>
            <Box className={classes2.actions}>
                <SeeMore theme={theme}>
                    <MuiCheckbox
                        noWrap={true}
                        variant="caption"
                        theme={theme}
                        onClick={promoAllClick}
                        className={classes2.promo_all}
                    >
                        Promo All
                    </MuiCheckbox>
                </SeeMore>
                <SearchBox
                    updateSearchText={updateSearchText}
                    className={classes2.search}
                    isMenuItem={true}
                    theme={theme}
                />
            </Box>
        </Box>
        <SeeMore
            theme={theme}
            className={classes2.sign_out_button}
            icon={<AccountBoxIcon className={classes2.text}/>}
        >
            <SignInOutButton theme={theme} className={classes2.sign_out_button}/>
        </SeeMore>
    </>;
}