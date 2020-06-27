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
        this.defs = this.props.defs;
        this.dataDict = this.props.dataDict;
        this.state = {binaryValue: true}
    }

    updateDefs(defs) {
        this.defs = defs;
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact component={MainPage} />
                <Route path="/NewGame" render={() => <NewGame dataDict={this.dataDict} defs={this.defs} /> } />
                <Route path="/LoadGame" render={() => <LoadGame dataDict={this.dataDict} defs={this.defs} /> } />
                <Route path="/CreatePiece" render={() => <CreatePiece dataDict={this.dataDict} defs={this.defs} /> } />
                <Route exact path="/ComingSoon" exact component={ComingSoon} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
            </Switch>
        </Router>
        );
    }
}