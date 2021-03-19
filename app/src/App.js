import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CouncilRules} from "./Components/CouncilRules/CouncilRules";
import CreatePiece from "./Components/CreatePiece/CreatePiece";
import Customize from "./Components/NewGame/Customize/Customize";
import NewGame from "./Components/NewGame/NewGame";
import LoadGame from "./Components/LoadGame/LoadGame";
import GameRoot from "./Components/GameRoot/GameRoot";
import MyPieces from "./Components/MyPieces/MyPieces";
import {Home} from "./Components/Home/Home";
import {LoginPage} from "./Components/Home/LoginPage";
import {getDoesUserExists} from "./API/isNewUser";
import {saveSampleData} from "./API/saveSampleData";
import {saveUser} from "./API/saveUser";

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
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({isSignedIn: !!user});
            if (user) {
                var uid = user.uid;
                this.isAnonymous = user.isAnonymous;
                getDoesUserExists().then(([userExists]) => {
                    if (! userExists) {
                        saveUser().then(r => {
                            saveSampleData()
                        })
                    }
                })
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
                        <Route exact path="/Customize" exact strict render={(props) => <Customize {...props} />}/>
                        <Route exact path="/Play" exact strict render={(props) => <GameRoot {...props} />}/>
                        <Route exact path="/CreatePiece" exact strict render={(props) => <CreatePiece {...props} />}/>
                        <Route exact path="/MyPieces" exact strict render={() => <MyPieces/>}/>
                        <Route exact path="/CouncilRules" exact component={CouncilRules}/>
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