import React from "react";
import MediaQuery from "react-responsive/src";
import {TabBarLg} from "./TabBarLg";
import {TabBarSm} from "./TabBarSm";

function TabBar(props) {
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
