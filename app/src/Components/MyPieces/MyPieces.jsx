import React from "react";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import "../Reuseables/Background/_backgrounds.scss";
import {HelpText} from "./HelpText";
import {HelpTitle} from "../Reuseables/NavBar/Help/HelpTitle";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import {PieceProfiles} from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import PersistentDrawer from "../Reuseables/Drawers/PersistentDrawer";
import {fontSize002, fontSize0026, fontSizeW0045} from "../styles/fontSizes.jss";
import {pageTitleStyle} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {piece_profiles, styles} from "./MyPieces.jss";

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
                <MediaQuery minWidth={960}>
                    <NavBar
                        screenCase='wide'
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        updateTheme={this.updateTheme}
                        helpText={HelpText(fontSize002, this.state.theme)}
                        helpTitle={<HelpTitle theme={this.state.theme} fontSize={fontSize0026}>Your Pieces</HelpTitle>}
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
                                    screenCase='wide'
                                    theme={this.state.theme}
                                    updateSearchText={this.updateSearchText}
                                >
                                    Saved Pieces
                                </ProfilesTitle>
                            </PieceProfiles>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={960}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={0}
                        drawer={
                            <NavBar
                                screenCase="thin"
                                flexDirection="column"
                                currentPage="MyPieces"
                                helpText={HelpText(fontSizeW0045, this.state.theme)}
                                helpTitle={<HelpTitle theme={this.state.theme} fontSize={fontSize0026}>Your Pieces</HelpTitle>}
                                redirectMessage={null}
                                theme={this.state.theme}
                                updateTheme={this.updateTheme}
                                additionalSettings={null}
                            />
                        }
                        appBarContent={<Typography variant='subtitle1' style={pageTitleStyle} noWrap>My Pieces</Typography>}
                    >
                        <div className={this.props.classes.my_pieces}>
                                <PieceProfiles
                                    title="My Pieces"
                                    parentPage="MyPieces"
                                    theme={this.state.theme}
                                    searchText={this.state.searchText}
                                    style={piece_profiles()}
                                >
                                    <ProfilesTitle
                                        screenCase='thin'
                                        theme={this.state.theme}
                                        updateSearchText={this.updateSearchText}
                                    >
                                        Saved Pieces
                                    </ProfilesTitle>
                                </PieceProfiles>
                        </div>
                    </PersistentDrawer>
                </MediaQuery>
                {/*<div className={this.props.classes.my_pieces}>*/}
                {/*    <PieceProfiles*/}
                {/*        title="My Pieces"*/}
                {/*        parentPage="MyPieces"*/}
                {/*        theme={this.state.theme}*/}
                {/*        searchText={this.state.searchText}*/}
                {/*    >*/}
                {/*        <ProfilesTitle*/}
                {/*            screenCase='wide'*/}
                {/*            theme={this.state.theme}*/}
                {/*            updateSearchText={this.updateSearchText}*/}
                {/*        >*/}
                {/*            Saved Pieces*/}
                {/*        </ProfilesTitle>*/}
                {/*    </PieceProfiles>*/}
                {/*</div>*/}
            </>
        );
    }
}

export default withStyles(styles)(MyPieces);
