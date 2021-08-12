import React, { useContext, useState } from "react";
import "../styles/Background/_backgrounds.scss";
import SearchIcon from "@material-ui/icons/Search";
import { SavedPiecesHelp } from "./Help/SavedPiecesHelp";
import { ProfilesTitle } from "../PieceProfiles/ProfilesTitle";
import { HelpSlideshow } from "../Reuseables/NavBar/Help/HelpSlideshow";
import { TwoItemAppBarContent } from "../Reuseables/AppBar/Content/TwoItemAppBarContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { SearchBox } from "../Reuseables/UserInput/SearchBox";
import { PageTitle } from "../Reuseables/AppBar/PageTitle";
import { ThemeContext } from "../../Context/ThemeContext";
import { textColor, useStyles } from "./MyPieces.jss";

const NavBar = React.lazy(() => import("../Reuseables/NavBar/NavBar"));
const PieceProfiles = React.lazy(() =>
    import("../PieceProfiles/PieceProfiles")
);
const ResponsiveDrawer = React.lazy(() =>
    import("../Reuseables/Drawers/ResponsiveDrawer")
);

function MyPieces() {
    const { themes, themeDispatch } = useContext(ThemeContext);
    const [searchText, setSearchText] = useState("");
    const isWide = useMediaQuery("(min-width:960px)");
    const classes = useStyles({ theme: themes.myPieces });

    const updateSearchText = (searchText) => {
        setSearchText(searchText);
    };

    return (
        <>
            <HelpSlideshow
                theme={themes.myPieces}
                title={"Saved Pieces"}
                currentPage={"MyPieces"}
                initialState={{ pos: 0, numSlides: 3 }}
            >
                {SavedPiecesHelp(themes.myPieces)}
            </HelpSlideshow>
            <ResponsiveDrawer
                theme={themes.myPieces}
                navBar={
                    <NavBar
                        show={true}
                        fullWidth={true}
                        lgDirection={"row"}
                        currentPage="MyPieces"
                        theme={themes.myPieces}
                        redirectMessage={null}
                        additionalSettings={null}
                    />
                }
                navHorizontal={isWide}
                appBarContent={
                    <TwoItemAppBarContent
                        theme={themes.myPieces}
                        seeMoreIcon={
                            <SearchIcon
                                className={classes.icon}
                                style={textColor(themes.myPieces)}
                            />
                        }
                    >
                        <PageTitle
                            theme={themes.myPieces}
                            className={classes.title}
                        >
                            Saved Pieces
                        </PageTitle>
                        <SearchBox
                            theme={themes.myPieces}
                            className={classes.search}
                            iconClassName={classes.icon}
                            updateSearchText={updateSearchText}
                            style={textColor(themes.myPieces)}
                        />
                    </TwoItemAppBarContent>
                }
                appBarType="2item"
                seeMoreIcon={
                    <SearchIcon
                        className={classes.icon}
                        style={textColor(themes.myPieces)}
                    />
                }
                tools={null}
                toolButtons={null}
            >
                <div className={classes.my_pieces}>
                    <PieceProfiles
                        title="My Pieces"
                        parentPage="MyPieces"
                        theme={themes.myPieces}
                        searchText={searchText}
                        className={classes.piece_profiles}
                    >
                        {isWide ? (
                            <ProfilesTitle
                                theme={themes.myPieces}
                                updateSearchText={updateSearchText}
                            >
                                Saved Pieces
                            </ProfilesTitle>
                        ) : null}
                    </PieceProfiles>
                </div>
            </ResponsiveDrawer>
        </>
    );
}

export default MyPieces;
