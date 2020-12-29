import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {CouncilRules} from "./Components/CouncilRules/CouncilRules";
import CreatePiece from "./Components/CreatePiece/CreatePiece";
import LoadGame from "./Components/LoadGame/LoadGame";
import NewGame from "./Components/NewGame/NewGame";
import GameRoot from "./Components/GameRoot/GameRoot";
import MyPieces from "./Components/MyPieces/MyPieces";
import {LoginPage} from "./Components/Home/LoginPage";
import Button from "@material-ui/core/Button";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSignedIn: false, binaryValue: true};
        this.isAnonymous = false;
        this.uid = null;
        /**
         * custom-chess.web.app
         */
        this.uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                signInSuccess: () => false,
            },
        };
        this.anonymousLogin = this.anonymousLogin.bind(this);
        this.signOut = this.signOut.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        document.body.className = "main-menu-background";
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({isSignedIn: !!user});
            if (user) {
                var uid = user.uid;
                this.isAnonymous = user.isAnonymous;
            } else {
                this.setState({isSignedIn: false});
            }
        });
    }

    anonymousLogin() {
        firebase
            .auth()
            .signInAnonymously()
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    signOut() {
        firebase.auth().signOut().then(r => this.setState({isSignedIn: true}));
    }

    update() {
        this.setState({binaryValue: !this.state.binaryValue});
    }

    render() {
        if (this.state.isSignedIn) {
            return (
                <Router>
                    <Switch>
                        <Route exact path="/" exact strict render={() => <Home signOut={this.signOut}/>}/>
                        <Route exact path="/NewGame" exact strict render={() => <NewGame/>}/>
                        <Route exact path="/LoadGame" exact strict render={() => <LoadGame/>}/>
                        <Route exact path="/LoadGame/Play" exact strict render={(props) => <GameRoot {...props} />}/>
                        <Route exact path="/NewGame/Play" exact strict render={(props) => <GameRoot {...props} />}/>
                        <Route exact path="/CreatePiece" exact strict render={(props) => <CreatePiece {...props} />}/>
                        <Route exact path="/CouncilRules" exact component={CouncilRules}/>
                        <Route exact path="/MyPieces" exact strict render={() => <MyPieces/>}/>
                    </Switch>
                </Router>
            );
        } else {
            return (
                <LoginPage uiConfig={this.uiConfig} anonymousLogin={this.anonymousLogin} />
            );
        }
    }
}