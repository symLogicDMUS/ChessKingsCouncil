import React, {useEffect} from "react";
import "../styles/Background/_backgrounds.scss";
import MediaQuery from "react-responsive/src";
import {TabBarLg} from "./TabBarLg";
import {TabBarSm} from "./TabBarSm";

function TabBar(props) {

    useEffect(() => {
        document.body.className = `${props.theme}-background`;
    }, [props.theme])

    return (
        <>
            <MediaQuery minWidth={960}>
                <TabBarLg {...props} />
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <TabBarSm {...props} />
            </MediaQuery>
        </>
    );
}

export default TabBar;
