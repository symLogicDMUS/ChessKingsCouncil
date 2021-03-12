import React from "react";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import {PieceProfiles} from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {HelpTitle} from "../Reuseables/Title/HelpTitle";
import {HelpText} from "./HelpText";
import "../Reuseables/Background/_backgrounds.scss";
import {
    piece_profiles,
    styles
} from "./MyPieces.jss";

class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            binaryValue: true,
            searchText: ''
        };
        this.updateTheme = this.updateTheme.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    componentDidMount() {
        document.body.className = "dark-background";
    }

    componentDidUpdate() {
        document.body.className = `${this.state.theme}-background`;
    }

    updateSearchText(searchText) {
        this.setState({searchText: searchText})
    }

    updateTheme(theme) {
        this.setState({theme: theme})
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={1040}>
                    <NavBar
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        updateTheme={this.updateTheme}
                        helpText={HelpText(fontSize002, this.state.theme)}
                        helpTitle={<HelpTitle theme={this.state.theme}>Your Pieces</HelpTitle>}
                        screenCase='desktop'
                        additionalSettings={null}
                    />
                    <div className={this.props.classes.my_pieces}>
                            <PieceProfiles
                                title="My Pieces"
                                parentPage="MyPieces"
                                theme={this.state.theme}
                                searchText={this.state.searchText}
                            >
                                <ProfilesTitle
                                    screenCase='desktop'
                                    theme={this.state.theme}
                                    updateSearchText={this.updateSearchText}
                                >
                                    Saved Pieces
                                </ProfilesTitle>
                            </PieceProfiles>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={0}
                        drawer={
                            <NavBar
                                currentPage="MyPieces"
                                flexDirection="column"
                                helpText={HelpText(fontSizeW0045, this.state.theme)}
                                helpTitle={<HelpTitle theme={this.state.theme}>Your Pieces</HelpTitle>}
                                redirectMessage={null}
                                theme={this.state.theme}
                                updateTheme={this.updateTheme}
                                screenCase="mobile"
                                additionalSettings={null}
                            />
                        }
                        appBarContent={<Typography variant='h6' noWrap>My Pieces</Typography>}
                    >
                        <div className={this.props.classes.my_pieces}>
                                <PieceProfiles
                                    parentPage="MyPieces"
                                    title="My Pieces"
                                    theme={this.state.theme}
                                    searchText={this.state.searchText}
                                    style={piece_profiles()}
                                >
                                    <ProfilesTitle
                                        screenCase='mobile'
                                        theme={this.state.theme}
                                        updateSearchText={this.updateSearchText}
                                    >
                                        Saved Pieces
                                    </ProfilesTitle>
                                </PieceProfiles>
                        </div>
                    </PersistentDrawer>
                </MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(MyPieces);
