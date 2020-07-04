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
import {GameRoot} from "./Components/GameRoot/GameRoot";
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
        this.setCurrentGame = this.setCurrentGame.bind(this);
        this.setCurrentGameData = this.setCurrentGameData.bind(this);
        this.setCouncilCase = this.setCouncilCase.bind(this);
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

    setCurrentGame(currentGameName) {
        this.currentGameName = currentGameName;
    }

    setCurrentGameData(currentGameData) {
        this.currentGameData = currentGameData;
    }

    setCouncilCase(councilCase) {
        this.councilCase = councilCase;
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact component={MainPage} />
                <Route exact path="/NewGame" exact strict render={() => <NewGame dataDict={this.dataDict} defs={this.defs} updateDataDict={this.updateDataDict} /> } />
                <Route exact path="/LoadGame" exact strict render={() => <LoadGame gameNames={this.getGameNames()} defs={this.defs} getGame={this.getGame}  /> } />
                <Route exact path="/LoadGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/NewGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/CreatePiece" exact strict render={() => <CreatePiece defs={this.defs} updateDefs={this.updateDefs} /> } />
                <Route exact path="/CouncilRules" exact strict exact component={CouncilRules} />
                <Route exact path="/ComingSoon" exact strict exact component={ComingSoon} />
            </Switch>
        </Router>
        );
    }
}