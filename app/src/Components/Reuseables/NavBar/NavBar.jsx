import React from "react";
import NavBarRow from "./NavBarRow";
import NavBarColumn from "./NavBarColumn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function NavBar(props) {
    const { lgDirection, children, ...other } = props;
    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? "wide" : "thin";

    return (
        <>
            {lgDirection === "row" && screenCase === "wide" ? (
                <NavBarRow screenCase={screenCase} {...other} />
            ) : (
                <NavBarColumn screenCase={screenCase} {...other} />
            )}
        </>
    );
}

export default NavBar;
