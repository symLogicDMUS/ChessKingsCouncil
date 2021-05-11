import React, {useContext} from "react";
import MediaQuery from "react-responsive/src";
import "../styles/Background/_backgrounds.scss";
import MainMenuDrawer from "../Reuseables/Drawers/MainMenuDrawer";
import { MainMenuLg } from "./MainMenuLg";
import {ThemeContext} from "../ThemeContext";

function Home() {
    const themes = useContext(ThemeContext)

    return (
        <>
            <MediaQuery minWidth={960}>
                <MainMenuLg theme={themes.home} />
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <MainMenuDrawer
                    theme={themes.home}
                />
            </MediaQuery>
        </>
    );
}

export default Home;