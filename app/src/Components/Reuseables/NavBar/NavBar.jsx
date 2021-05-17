import React from "react";
import NavTabRow from "./NavTabRow";
import NavTabColumn from "./NavTabColumn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function NavBar(props) {
    const {lgDirection, children, ...other} = props;
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? "wide" : "thin";

    return (
        <>
            {lgDirection==="row" && screenCase==="wide" ? (
                <NavTabRow screenCase={screenCase} {...other} />
            ) : (
                <NavTabColumn screenCase={screenCase} {...other} />
            )}
        </>
    );
}

export default NavBar;
