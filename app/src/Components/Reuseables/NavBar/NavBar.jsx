import React from "react";
import NavBarColumn from "./NavBarColumn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavTabRow from "./NavTabRow";

function NavBar(props) {
    const {lgDirection, children, ...other} = props;
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? "wide" : "thin";

    return (
        <>
            {lgDirection==="row" && screenCase==="wide" ? (
                <NavTabRow screenCase={screenCase} {...other} />
            ) : (
                <NavBarColumn screenCase={screenCase} {...other} />
            )}
        </>
    );
}

export default NavBar;
