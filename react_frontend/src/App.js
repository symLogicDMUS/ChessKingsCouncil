import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect 
} from "react-router-dom";

//Pages
import {MainMenuComponent as MainPage} from "./Components/Home/Home";
import {ComingSoonComponent as ComingSoon} from "./Components/ComingSoon/ComingSoonComponent";
import {CouncilRules} from "./Components/CouncilRules/CouncilRules";
import {CreatePiece} from "./Components/CreatePiece/CreatePiece";
import {LoadGame} from "./Components/LoadGame/LoadGame";
import {NewGame} from "./Components/NewGame/NewGame";

export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact component={MainPage} />
                <Route path="/NewGame" render={() => <NewGame dataDict={this.props.dataDict} defs={this.props.defs} /> } />
                <Route path="/LoadGame" render={() => <LoadGame dataDict={this.props.dataDict} defs={this.props.defs} /> } />
                <Route path="/CreatePiece" render={() => <CreatePiece dataDict={this.props.dataDict} defs={this.props.defs} /> } />
                <Route exact path="/ComingSoon" exact component={ComingSoon} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
            </Switch>
        </Router>
        );
    }
}