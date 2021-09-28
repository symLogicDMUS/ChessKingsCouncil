import React, { useContext } from "react";
import MediaQuery from "react-responsive/src";
import "../styles/Background/_backgrounds.scss";
import MainMenuLg from "./Main Menu/MainMenuLg";
import MainMenuSm from "../Reuseables/Drawers/MainMenuSm";
import { ThemeContext } from "../../Context/ThemeContext";

function Home() {
    const { themes, themeDispatch } = useContext(ThemeContext);

    return (
        <>
            <MediaQuery minWidth={960}>
                <MainMenuLg theme={themes.home} />
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <MainMenuSm theme={themes.home} />
            </MediaQuery>
        </>
    );
}

export default Home;
