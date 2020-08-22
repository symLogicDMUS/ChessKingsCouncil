import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch
} from "react-router-dom";

//Pages
import {Home} from "./Components/Home/Home";
import {ComingSoonComponent as ComingSoon} from "./Components/ComingSoon/ComingSoonComponent";
import {CouncilRules} from "./Components/CouncilRules/CouncilRules";
import {CreatePiece} from "./Components/CreatePiece/CreatePiece";
import {LoadGame} from "./Components/LoadGame/LoadGame";
import {NewGame} from "./Components/NewGame/NewGame";
import {GameRoot} from "./Components/GameRoot/GameRoot";
import {MyPieces} from "./Components/MyPieces/MyPieces";
import {getDataDict} from "./API";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {binaryValue: true};
        this.defs = this.props.defs;
        this.dataDict = this.props.dataDict;
        this.gamesNames = [];
        this.update = this.update.bind(this);
        this.updateDefs = this.updateDefs.bind(this);
        this.deleteDef = this.deleteDef.bind(this);
        this.getDataDict = this.getDataDict.bind(this);
        this.setDataDict = this.setDataDict.bind(this);
        this.getGame = this.getGame.bind(this);
        this.setCurrentGame = this.setCurrentGame.bind(this);
        this.setCurrentGameData = this.setCurrentGameData.bind(this);
        this.setCouncilCase = this.setCouncilCase.bind(this);
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    async savesDefApi(pieceName, pieceDef) {
        return await fetch('/save_def', {
            method:"POST",
            body: JSON.stringify({'user':this.props.username, 'piece_name':pieceName, 'piece_def':pieceDef})  
        })
    }

    async deleteDefApi(pieceName) {
        return await fetch('/delete_def', {
            method:"POST",
            body: JSON.stringify({'user':this.props.username, 'piece_name':pieceName})  
        })
    }

    updateDefs(pieceName, pieceDef) {
        this.defs[pieceName] = pieceDef;
        return Promise.all([this.savesDefApi(pieceName, pieceDef)]);
    }

    deleteDef(pieceName) {
        delete this.defs[pieceName];
        return Promise.all([this.deleteDefApi(pieceName)]);
    }

    setDataDict(dataDict) {
         this.dataDict = dataDict;
    }

    getDataDict() {
        return Promise.all([getDataDict(this.props.username)])
    }

    getGame(gameName) {
        return this.dataDict[gameName];
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
                <Route exact path="/" exact strict render={() => <Home defs={this.defs} 
                                                                       updateDefs={this.updateDefs} />} />
                <Route exact path="/NewGame" exact strict render={() => <NewGame dataDict={this.dataDict} 
                                                                                 defs={this.defs}
                                                                                 username={this.props.username}/> } />
                <Route exact path="/LoadGame" exact strict render={() => <LoadGame getDataDict={this.getDataDict}
                                                                                   setDataDict={this.setDataDict}
                                                                                   username={this.props.username}
                                                                                   getGame={this.getGame}                                                                         
                                                                                   defs={this.defs} /> } />
                <Route exact path="/LoadGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/NewGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/CreatePiece" exact strict render={() => <CreatePiece defs={this.defs} 
                                                                                         updateDefs={this.updateDefs} 
                                                                                         defaultPiece={null} />} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
                <Route exact path="/MyPieces" exact strict render={() => <MyPieces defs={this.defs}
                                                                                   updateDefs={this.updateDefs} 
                                                                                   deleteDef={this.deleteDef} />} />
                <Route exact path="/ComingSoon" component={ComingSoon} />
            </Switch>
        </Router>
        );
    }
}