import React from "react";
import MediaQuery from "react-responsive";
import Typography from "@material-ui/core/Typography";
import { getDefs } from "../../API/getDefs";
import { NavBar } from "../Reuseables/NavBar/NavBar";
import { ProfilesTitle } from "../PieceProfiles/ProfilesTitle";
import { PieceProfiles } from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import {fontSize002, fontSize0024} from "../styles/fontSizes.jss";
import {HelpTitle} from "../Reuseables/HelpTitle";
import {HelpText} from "./HelpText";
import "../styles/_backgrounds.scss";
import { styles } from "./MyPieces.jss";

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
            this.setState({ fetched: true });
        });
    }

    updateSearchText(searchText) {
        this.setState({searchText: searchText})
    }

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <NavBar
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        style={{
                            fontSize: fontSize002,
                            width: "100%",
                            height: "2.25em",
                        }}
                        helpText={HelpText(fontSize002, this.state.theme)}
                        helpTitle={<HelpTitle theme={this.state.theme}>Your Pieces</HelpTitle>}
                        buttonStyle={{
                            fontSize: fontSize002,
                            height: "2.25em",
                            justifyContent: "center",
                        }}
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
                                <ProfilesTitle theme={this.state.theme} updateSearchText={this.updateSearchText}>
                                    My Pieces
                                </ProfilesTitle>
                            </PieceProfiles>
                        )}
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <PersistentDrawer
                        theme={this.state.theme}
                        spacing={0}
                        drawer={
                            <NavBar
                                currentPage="MyPieces"
                                flexDirection="column"
                                style={{ width: "100%" }}
                                buttonStyle={{
                                    fontSize: fontSize0024,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                helpText={HelpText(fontSize002, this.state.theme)}
                                helpTitle={<HelpTitle theme={this.state.theme}>Your Pieces</HelpTitle>}
                                redirectMessage={null}
                                theme={this.state.theme}
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
                                >
                                    <ProfilesTitle theme={this.state.theme}>
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
