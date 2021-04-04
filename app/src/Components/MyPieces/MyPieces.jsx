import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import "../Reuseables/Background/_backgrounds.scss";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import {PieceProfiles} from "../PieceProfiles/PieceProfiles";
import ResponsiveDrawer from "../Reuseables/Drawers/ResponsiveDrawer";
import {fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {SearchBox} from "../Reuseables/UserInput/SearchBox";
import {textColor, useStyles} from "./MyPieces.jss";

function MyPieces() {
    const [theme, setTheme] = useState("dark");
    const [searchText, setSearchText] = useState("");
    const isWide = useMediaQuery("(min-width:960px)");
    const classes = useStyles();

    useEffect(() => {
        document.body.className = `${theme}-background`;
    }, [theme])

    const updateSearchText = (searchText) => {
        setSearchText(searchText)
    };

    const updateTheme = (theme) => {
        setTheme(theme)
    };

    return (
        <ResponsiveDrawer
            theme={theme}
            navBar={
                <NavBar
                    screenCase="thin"
                    flexDirection="column"
                    currentPage="MyPieces"
                    helpText={HelpText(fontSizeW0045, theme)}
                    helpTitle={
                        <HelpTitle theme={theme} fontSize={fontSize0026}>
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
            appBarContent={[
                <Typography variant='subtitle1' className={classes.title} style={textColor(theme)} noWrap>
                    My Pieces
                </Typography>,
                <SearchBox theme={theme} className={classes.search} iconClassName={classes.icon} updateSearchText={updateSearchText} />
            ]}
            appBarType='2item'
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
