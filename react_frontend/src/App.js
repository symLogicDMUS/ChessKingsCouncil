import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect 
} from "react-router-dom";

//Pages
import {MainMenuComponent as MainPage} from "./Components/Home/PageComponent/Home";
import {ComingSoonComponent as ComingSoon} from "./Components/ComingSoon/ComingSoonComponent";
import {CouncilRules} from "./Components/CouncilRules/PageComponent/CouncilRules";
import {CreatePiece} from "./Components/CreatePiece/PageComponents/CreatePiece";
import {LoadGame} from "./Components/LoadGame/PageComponent/LoadGame";
import {NewGame} from "./Components/NewGame/NewGame";

export class App extends React.Component {

    constructor(props) {
        super(props);
<<<<<<< Updated upstream
=======
        this.defs = this.props.defs;
        this.dataDict = this.props.dataDict;
        this.state = {binaryValue: true};
        this.updateDefs = this.updateDefs.bind(this);
    }

    updateDefs(defs) {
        this.defs = defs;
>>>>>>> Stashed changes
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact component={MainPage} />
<<<<<<< Updated upstream
                <Route path="/NewGame" render={() => <NewGame dataDict={this.props.dataDict} defs={this.props.defs} /> } />
                <Route path="/LoadGame" render={() => <LoadGame dataDict={this.props.dataDict} defs={this.props.defs} /> } />
                <Route path="/CreatePiece" render={() => <CreatePiece dataDict={this.props.dataDict} defs={this.props.defs} /> } />
=======
                <Route path="/NewGame" render={() => <NewGame dataDict={this.dataDict} defs={this.defs} /> } />
                <Route path="/LoadGame" render={() => <LoadGame dataDict={this.dataDict} defs={this.defs} /> } />
                <Route path="/CreatePiece" render={() => <CreatePiece dataDict={this.dataDict} defs={this.defs} updateDefs={this.updateDefs} /> } />
>>>>>>> Stashed changes
                <Route exact path="/ComingSoon" exact component={ComingSoon} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
            </Switch>
        </Router>
        );
    }
}