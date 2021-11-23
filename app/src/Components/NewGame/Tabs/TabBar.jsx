import React, { useEffect } from "react";
import MediaQuery from "react-responsive/src";
import "../../styles/Background/_backgrounds.scss";
import TabBarSm from "./TabBarSm";
import TabBarLg from "./TabBarLg";

function TabBar(props) {
    useEffect(() => {
        document.body.className = `${props.theme}-background`;
        document.documentElement.className = `${props.theme}-background`;
    }, [props.theme]);

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
