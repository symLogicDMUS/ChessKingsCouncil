import React from "react";
import MediaQuery from "react-responsive";
import { NavBar } from "../Reuseables/NavBar/NavBar";
// import {ProfilesTitle} from "../PieceProfiles/ProfilesTitle";
import { ProfilesTitle } from "../PieceProfiles/ProfilesTitle";
import { styles } from "./MyPieces.jss";
import { getDefs } from "../../API/getDefs";
import { PieceProfiles } from "../PieceProfiles/PieceProfiles";
import withStyles from "@material-ui/core/styles/withStyles";
import "../styles/_backgrounds.scss";
import { fontSize } from "../styles/fontSize.jss";
import PersistentDrawer from "../Reuseables/PersistentDrawer";
import Typography from "@material-ui/core/Typography";
import {HelpText, HelpTitle} from "./HelpText";

class MyPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            fetched: false,
        };
        this.defs = {};
        this.standards = ["Rook", "Bishop", "Queen", "Knight", "Pawn", "King"];
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

    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <NavBar
                        currentPage="MyPieces"
                        theme={this.state.theme}
                        style={{
                            fontSize: fontSize,
                            width: "100%",
                            height: "2.25em",
                        }}
                        helpText={HelpText(fontSize, this.state.theme)}
                        helpTitle={HelpTitle(fontSize, this.state.theme)}
                        buttonStyle={{
                            fontSize: fontSize,
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
                                load={() => null}
                            >
                                <ProfilesTitle theme={this.state.theme}>
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
                                    fontSize: fontSize * 1.2,
                                    justifyContent: "flex-start",
                                    width: "99%",
                                    height: "2.5em",
                                }}
                                helpText={HelpText(fontSize, this.state.theme)}
                                helpTitle={HelpTitle(fontSize, this.state.theme)}
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
                                    <ProfilesTitle>My Pieces</ProfilesTitle>
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
