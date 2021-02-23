import React from "react";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import {getDefs} from "../../API/getDefs";
import {NavBar} from "../Reuseables/NavBar/NavBar";
import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import {PieceProfiles} from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {fontSize002, fontSizeW0045} from "../styles/fontSizes.jss";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {HelpText} from "./HelpText";
import "../styles/_backgrounds.scss";
import {piece_profiles, styles} from "./MyPieces.jss";
import {availHeight} from "../helpers/windowMeasurments";
import {addressBarHeight} from "../Reuseables/PersistentDrawer.jss";
import {resolveScreenCase} from "../helpers/resolveScreenCase";

class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            fetched: false,
            searchText: ''
        };
        this.defs = {};
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
        this.updateSearchText = this.updateSearchText.bind(this);
        this.setDefs = this.setDefs.bind(this);
        this.setDefs();
    }

    componentDidMount() {
        document.body.className = "dark-background";
        this.setDefs();
    }

    setDefs() {
        getDefs().then(([defs]) => {
            if (defs) {
                this.defs = defs;
                for (const pieceName of this.standards) {
                    if (Object.keys(this.defs).includes(pieceName))
                        delete this.defs[pieceName];
                }
            } else {
                this.defs = {};
            }
            this.setState({fetched: true});
        });
    }

    updateSearchText(searchText) {
        this.setState({searchText: searchText})
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={1040}>
                    <NavBar
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        helpText={HelpText(fontSize002, this.state.theme)}
                        helpTitle={<HelpTitle theme={this.state.theme}>Your Pieces</HelpTitle>}
                        screenCase='desktop'
                    />
                    <div className={this.props.classes.my_pieces}>
                        {this.state.fetched && (
                            <PieceProfiles
                                title="My Pieces"
                                defs={this.defs}
                                parentPage="MyPieces"
                                theme={this.state.theme}
                                searchText={this.state.searchText}
                            >
                                <ProfilesTitle
                                    screenCase='desktop'
                                    theme={this.state.theme}
                                    updateSearchText={this.updateSearchText}
                                >
                                    My Pieces
                                </ProfilesTitle>
                            </PieceProfiles>
                        )}
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
                                screenCase={resolveScreenCase("mobile")}
                            />
                        }
                        appBarContent={<Typography variant='h6' noWrap>My Pieces</Typography>}
                    >
                        <div className={this.props.classes.my_pieces}>
                            {this.state.fetched && (
                                <PieceProfiles
                                    parentPage="MyPieces"
                                    title="My Pieces"
                                    defs={this.defs}
                                    theme={this.state.theme}
                                    searchText={this.state.searchText}
                                    style={piece_profiles()}
                                >
                                    <ProfilesTitle
                                        screenCase='mobile'
                                        theme={this.state.theme}
                                        updateSearchText={this.updateSearchText}
                                    >
                                        My Pieces
                                    </ProfilesTitle>
                                </PieceProfiles>
                            )}
                        </div>
                    </PersistentDrawer>
                </MediaQuery>
            </>
        );
    }
}

export default withStyles(styles)(MyPieces);
