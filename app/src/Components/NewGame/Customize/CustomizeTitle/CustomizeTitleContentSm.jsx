import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SignInOutButton from "../../../Home/Sign In/SignInOutButton";
import { PageTitle } from "../../../Reuseables/AppBar/PageTitle";
import { SeeMore } from "../../../Reuseables/UserInput/SeeMore";
import { SearchBox } from "../../../Reuseables/UserInput/SearchBox";
import { MuiCheckbox } from "../../../Reuseables/Clickables/MuiCheckbox";
import { useStyles as useMoreStyles } from "../CustomizeTitle.jss";
import { useStyles } from "./CustomizeTitleContentXSm.jss";

export function CustomizeTitleContentSm(props) {
    const { theme, className, updateSearchText, promoAllClick, ...other } =
        props;

    const classes = useStyles({ theme });
    const classes2 = useMoreStyles({ theme });

    return (
        <Box
            className={clsx(classes.content, {
                [className]: className,
            })}
            {...other}
        >
            <PageTitle theme={theme} className={classes2.title}>
                Customize Game
            </PageTitle>
            <SeeMore theme={theme}>
                <MuiCheckbox
                    noWrap={true}
                    theme={theme}
                    variant="caption"
                    onClick={promoAllClick}
                    className={classes2.promo_all}
                >
                    Promo All
                </MuiCheckbox>
            </SeeMore>
            <SeeMore
                theme={theme}
                icon={<SearchIcon className={classes2.text} />}
            >
                <SearchBox
                    updateSearchText={updateSearchText}
                    className={classes2.search}
                    isMenuItem={true}
                    theme={theme}
                />
            </SeeMore>
            <SignInOutButton theme={theme} />
        </Box>
    );
}
