import React, {Suspense, lazy} from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {saveUser} from "./API/saveUser";
import NotFound from "./Components/Home/NotFound";
import {getDoesUserExists} from "./API/isNewUser";
import {saveSampleData} from "./API/sampleData/saveSampleData";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Loading} from "./Components/Reuseables/Animations/Loading";
import SignInPage from "./Components/Home/SignInPage";
import {UserContext} from "./UserContext";
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
        this.state = {
            uid: null,
            isSignedIn: false,
            isAnonymous: false
        };
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
        this.signOut = this.signOut.bind(this);
        this.anonymousLogin = this.anonymousLogin.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    uid: user.uid,
                    isSignedIn: !!user,
                    isAnonymous: user.isAnonymous,
                })
                getDoesUserExists().then(([userExists]) => {
                    if (! userExists) {
                        saveUser().then(async r => {
                            return await saveSampleData()
                        })
                    }
                })
            }
            else {
                this.setState({
                    uid: null,
                    isSignedIn: false,
                    isAnonymous: false
                })
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
                console.log(`error: ${errorMessage} code: ${errorCode}`)
            })
    }

    signOut() {
        firebase.auth().signOut().then(r => this.setState({isSignedIn: true}));
    }

    render() {
        if (this.state.isSignedIn) {
            return (
                <Router>
                    <Suspense fallback={<Loading />}>
                        <UserContext.Provider value={this.state.uid}>
                            <Switch>
                                <Route exact path="/" render={() => <Home signOut={this.signOut} />}/>
                                <Route exact path="/NewGame" component={NewGame}/>
                                <Route exact path="/LoadGame" component={LoadGame} />
                                <Route exact path="/CreatePiece" component={CreatePiece} />
                                <Route exact path="/Customize" component={Customize}/>
                                <Route exact path="/Play" component={GameRoot} />
                                <Route exact path="/MyPieces" component={MyPieces} />
                                <Route exact path="/CouncilRules" component={CouncilRules} />
                                <Route component={NotFound} />
                            </Switch>
                        </UserContext.Provider>
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