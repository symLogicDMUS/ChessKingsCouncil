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
        this.gamesNames = []; //list included so can sort by order added to dataDict
        Object.keys(this.dataDict).forEach(gameName => {
            this.gamesNames.unshift(gameName);
        })
        this.state = {binaryValue: true};
        this.updateDefs = this.updateDefs.bind(this);
        this.updateDataDict = this.updateDataDict.bind(this);
        this.getGameNames = this.getGameNames.bind(this);
        this.getGame = this.getGame.bind(this);
    }

    updateDefs(defs) {
        this.defs = defs;
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    updateDataDict(dataDict, newName) {
        this.dataDict = dataDict;
        this.gamesNames.unshift(newName);
    }

    getGameNames() {
        return this.gamesNames;
    }

    getGame(name) {

        return this.dataDict[name];
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact component={MainPage} />
                <Route path="/NewGame" render={() => <NewGame dataDict={this.dataDict} updateDataDict={this.updateDataDict} defs={this.defs} /> } />
                <Route path="/LoadGame" render={() => <LoadGame gameNames={this.getGameNames()} getGame={this.getGame} defs={this.defs} /> } />
                <Route path="/CreatePiece" render={() => <CreatePiece defs={this.defs} updateDefs={this.updateDefs} /> } />
                <Route exact path="/ComingSoon" exact component={ComingSoon} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
            </Switch>
        </Router>
        );
    }
}