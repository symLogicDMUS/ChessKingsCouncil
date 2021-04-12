import React, { useEffect, useState } from "react";
import { HelpText } from "./HelpText";
import "../Reuseables/Background/_backgrounds.scss";
import SearchIcon from "@material-ui/icons/Search";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import { HelpTitle } from "../Reuseables/NavBar/Help/HelpTitle";
import { ProfilesTitle } from "../PieceProfiles/ProfilesTitle";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import { TwoItemAppBarContent } from "../Reuseables/AppBar/Content/TwoItemAppBarContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { SearchBox } from "../Reuseables/UserInput/SearchBox";
import { PageTitle } from "../Reuseables/AppBar/PageTitle";
import PieceProfiles from "../PieceProfiles/PieceProfiles";
import { textColor, useStyles } from "./MyPieces.jss";

function MyPieces() {
    const [theme, setTheme] = useState("dark");
    const [searchText, setSearchText] = useState("");

    const isWide = useMediaQuery("(min-width:960px)");

    const classes = useStyles();

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [theme]);

    const updateSearchText = (searchText) => {
        setSearchText(searchText);
    };

    const updateTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <ResponsiveDrawer
            theme={theme}
            navBar={
                <NavBar
                    screenCase="thin"
                    flexDirection="column"
                    currentPage="MyPieces"
                    helpText={HelpText('4.5vw', theme)}
                    helpTitle={
                        <HelpTitle theme={theme} fontSize={'2.6vh'}>
                            Your Pieces
                        </HelpTitle>
                    }
                    theme={theme}
                    redirectMessage={null}
                    updateTheme={updateTheme}
                    additionalSettings={null}
                />
            }
            navHorizontal={isWide}
            appBarContent={
                <TwoItemAppBarContent
                    theme={theme}
                    seeMoreIcon={
                        <SearchIcon
                            className={classes.icon}
                            style={textColor(theme)}
                        />
                    }
                >
                    <PageTitle theme={theme}>Saved Pieces</PageTitle>
                    <SearchBox
                        theme={theme}
                        className={classes.search}
                        iconClassName={classes.icon}
                        updateSearchText={updateSearchText}
                        style={textColor(theme)}
                    />
                </TwoItemAppBarContent>
            }
            appBarType="2item"
            seeMoreIcon={
                <SearchIcon className={classes.icon} style={textColor(theme)} />
            }
            tools={null}
            toolButtons={null}
        >
            <div className={classes.my_pieces}>
                <PieceProfiles
                    title="My Pieces"
                    parentPage="MyPieces"
                    theme={theme}
                    searchText={searchText}
                    className={classes.piece_profiles}
                >
                    {isWide ? (
                        <ProfilesTitle
                            theme={theme}
                            updateSearchText={updateSearchText}
                        >
                            Saved Pieces
                        </ProfilesTitle>
                    ) : null}
                </PieceProfiles>
            </div>
        </ResponsiveDrawer>
    );
}

export default MyPieces;
