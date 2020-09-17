import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
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

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {binaryValue: true};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" exact strict render={() => <Home />} />
                <Route exact path="/NewGame" exact strict render={() => <NewGame username={this.props.username}/> } />
                <Route exact path="/LoadGame" exact strict render={() => <LoadGame username={this.props.username} /> } />
                <Route exact path="/LoadGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/NewGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                <Route exact path="/CreatePiece" exact strict render={() => <CreatePiece username={this.props.username} defaultPiece={null} />} />
                <Route exact path="/CouncilRules" exact component={CouncilRules} />
                <Route exact path="/MyPieces" exact strict render={() => <MyPieces username={this.props.username} />} />
                <Route exact path="/ComingSoon" component={ComingSoon} />
            </Switch>
        </Router>
        );
    }
}