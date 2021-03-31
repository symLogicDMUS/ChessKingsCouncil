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
import {SignInPage} from "./Components/Home/SignInPage";
import {getDoesUserExists} from "./API/isNewUser";
import {saveSampleData} from "./API/saveSampleData";
import {saveUser} from "./API/saveUser";
import "./App.scss";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSignedIn: false, userTouchedScreen: false, binaryValue: true};
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
        this.update = this.update.bind(this);
        this.signOut = this.signOut.bind(this);
        this.onFirstTouch = this.onFirstTouch.bind(this);
        this.anonymousLogin = this.anonymousLogin.bind(this);
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
        window.addEventListener('touchstart', this.onFirstTouch, false)
    }

    /**
     * https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
     */
    onFirstTouch() {
        this.setState({userTouchedScreen: true});
        window.removeEventListener('touchstart', this.onFirstTouch, false); // remove listener after touch.
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
                        <Route exact path="/" exact strict render={() => <Home signOut={this.signOut} isTouchscreen={this.state.userTouchedScreen}/>}/>
                        <Route exact path="/NewGame" exact strict render={() => <NewGame isTouchscreen={this.state.userTouchedScreen}/>}/>
                        <Route exact path="/LoadGame" exact strict render={() => <LoadGame isTouchscreen={this.state.userTouchedScreen}/>}/>
                        <Route exact path="/Customize" exact strict render={(props) => <Customize {...props} isTouchscreen={this.state.userTouchedScreen} />}/>
                        <Route exact path="/Play" exact strict render={(props) => <GameRoot {...props} isTouchscreen={this.state.userTouchedScreen} />}/>
                        <Route exact path="/CreatePiece" exact strict render={(props) => <CreatePiece {...props} isTouchscreen={this.state.userTouchedScreen} />}/>
                        <Route exact path="/MyPieces" exact strict render={() => <MyPieces isTouchscreen={this.state.userTouchedScreen}/>}/>
                        <Route exact path="/CouncilRules" exact strict render={() => <CouncilRules isTouchscreen={this.state.userTouchedScreen} />}/>
                    </Switch>
                </Router>
            );
        } else {
            return (
                <SignInPage uiConfig={this.uiConfig} anonymousLogin={this.anonymousLogin} />
            );
        }
    }
}