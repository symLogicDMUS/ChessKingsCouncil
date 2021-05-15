import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {PageTitle} from "../../Reuseables/AppBar/PageTitle";
import {SearchBox} from "../../Reuseables/UserInput/SearchBox";
import {MuiCheckbox} from "../../Reuseables/Clickables/MuiCheckbox";
import {ThreeItemAppBarContent} from 
        "../../Reuseables/AppBar/Content/ThreeItemAppBarContent";
import { useStyles } from "./CustomizeTitle.jss";

export function CustomizeTitle(props) {
    const classes = useStyles({theme: props.theme});

    return <ThreeItemAppBarContent
        theme={props.theme}
        seeMoreIcon2={<SearchIcon className={classes.text}/>}
    >
        <PageTitle theme={props.theme} className={classes.title}>
            Customize Game
        </PageTitle>
        <MuiCheckbox
            noWrap={true}
            variant="caption"
            theme={props.theme}
            onClick={props.onClick}
            className={classes.promo_all}
        >
            Promo All
        </MuiCheckbox>
        <SearchBox
            updateSearchText={props.updateSearchText}
            className={classes.search}
            theme={props.theme}
            isMenuItem={true}
        />
    </ThreeItemAppBarContent>;
}