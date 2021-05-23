import React, {useContext} from "react";
import MediaQuery from "react-responsive/src";
import "../styles/Background/_backgrounds.scss";
import MainMenuDrawer from "../Reuseables/Drawers/MainMenuDrawer";
import { MainMenuLg } from "./Main Menu/MainMenuLg";
import {ThemeContext} from "../../Context/ThemeContext";

function Home() {
    const {themes, setThemes} = useContext(ThemeContext)

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