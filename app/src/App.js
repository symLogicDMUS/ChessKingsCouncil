import React, {Suspense, lazy} from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {saveUser} from "./API/saveUser";
import {getDoesUserExists} from "./API/isNewUser";
import {saveSampleData} from "./API/sampleData/saveSampleData";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignInPage from "./Components/Home/SignInPage";
import {Loading} from "./Components/Reuseables/Animations/Loading";
import "./App.scss";

const Home = lazy(() => import("./Components/Home/Home"));
const NewGame = lazy(() => import("./Components/NewGame/NewGame"));
const LoadGame = lazy(() => import("./Components/LoadGame/LoadGame"));
const GameRoot = lazy(() => import("./Components/GameRoot/GameRoot"));
const MyPieces = lazy(() => import("./Components/MyPieces/MyPieces"));
const CreatePiece = lazy(() => import("./Components/CreatePiece/CreatePiece"));
const Customize = lazy(() => import("./Components/NewGame/Customize/Customize"));
const CouncilRules = lazy(() => import("./Components/CouncilRules/CouncilRules"));


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
                        saveUser().then(async r => {
                            return await saveSampleData()
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
        window.removeEventListener('touchstart', this.onFirstTouch, false);
    }

    anonymousLogin() {
        firebase
            .auth()
            .signInAnonymously()
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`error: ${errorMessage} code: ${errorCode}`)
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
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path="/" render={() => <Home signOut={this.signOut} />}/>
                            <Route exact path="/NewGame" component={NewGame}/>
                            <Route exact path="/LoadGame" component={LoadGame} />
                            <Route exact path="/CreatePiece" component={CreatePiece} />
                            <Route exact path="/Customize" component={Customize}/>
                            <Route exact path="/Play" render={(props) => <GameRoot {...props} userTouchedScreen={this.state.userTouchedScreen} />}/>
                            <Route exact path="/MyPieces" component={MyPieces} />
                            <Route exact path="/CouncilRules" component={CouncilRules} />
                        </Switch>
                    </Suspense>
                </Router>
            );
        } else {
            return (
                <SignInPage uiConfig={this.uiConfig} anonymousLogin={this.anonymousLogin} />
            );
        }
    }
}