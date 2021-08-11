import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { PageTitle } from "../../../Reuseables/AppBar/PageTitle";
import { MuiCheckbox } from "../../../Reuseables/Clickables/MuiCheckbox";
import { SearchBox } from "../../../Reuseables/UserInput/SearchBox";
import { SeeMore } from "../../../Reuseables/UserInput/SeeMore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SignInOutButton from "../../../Home/Sign In/SignInOutButton";
import { useStyles as useMoreStyles } from "../CustomizeTitle.jss";
import { useStyles } from "./CustomizeTitleContentLg.jss";

export function CustomizeTitleContentLg(props) {
    const { promoAllClick, updateSearchText, className, theme, ...other } =
        props;

    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    return (
        <>
            <Box
                className={clsx(classes2.content, {
                    [className]: className,
                })}
                {...other}
            >
                <PageTitle theme={theme} className={classes2.title}>
                    Customize Game
                </PageTitle>
                <Box className={classes2.actions}>
                    <MuiCheckbox
                        noWrap={true}
                        variant="caption"
                        theme={theme}
                        onClick={promoAllClick}
                        className={classes2.promo_all}
                    >
                        Promo All
                    </MuiCheckbox>
                    <SearchBox
                        theme={theme}
                        isMenuItem={true}
                        className={classes2.search}
                        updateSearchText={updateSearchText}
                    />
                </Box>
            </Box>
            <SeeMore
                theme={theme}
                className={classes2.sign_out_button}
                icon={<AccountBoxIcon className={classes2.text} />}
            >
                <SignInOutButton theme={theme} />
            </SeeMore>
        </>
    );
}
