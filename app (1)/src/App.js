import React from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        this.state = {isSignedIn: false, binaryValue: true}
        this.isAnonymous = false;
        this.uid = null;
        this.uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => false
            }
        };
        this.anonymousLogin = this.anonymousLogin.bind(this);
        this.signOut = this.signOut.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        document.body.className = "main-menu-background";
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user})
            if (user) {
                this.isAnonymous = user.isAnonymous;
                //this.uid = user.uid;
            }
            console.log("user", user)
        })        
    }

    anonymousLogin() {
        firebase.auth().signInAnonymously().catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });        
    }

    signOut() {
        firebase.auth().signOut()
    }

    update() {
        this.setState({binaryValue: ! this.state.binaryValue})
    }

    render() {
        if (this.state.isSignedIn) {
            return (
                <Router>
                    <Switch>
                        <Route exact path="/" exact strict render={() => <Home signOut={this.signOut} />} />
                        <Route exact path="/NewGame" exact strict render={() => <NewGame /> } />
                        <Route exact path="/LoadGame" exact strict render={() => <LoadGame /> } />
                        <Route exact path="/LoadGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                        <Route exact path="/NewGame/Play" exact strict render={(props) => <GameRoot {...props} />} />
                        <Route exact path="/CreatePiece" exact strict render={() => <CreatePiece  defaultPiece={null} />} />
                        <Route exact path="/CouncilRules" exact component={CouncilRules} />
                        <Route exact path="/MyPieces" exact strict render={() => <MyPieces />} />
                        <Route exact path="/ComingSoon" component={ComingSoon} />
                    </Switch>
                </Router>
                );
        }

        else {
            return (
                <>
                    <img src="/Images/chess-kings-council.svg" style={{position: "relative", 
                                                                       top: "22vh", 
                                                                       left: "12.5vw", 
                                                                       height:"20vh", 
                                                                       width: "75vw"}} />
                    <div className="config-container" style={{position: "relative",
                                                              width: "20vw",
                                                              height: "15vh",
                                                              left: "36vw",
                                                              top: "22vh"}}>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} 
                                            firebaseAuth={firebase.auth()} />
                        <div className="anonymous-login" onClick={this.anonymousLogin} style={{
                            position: "relative",
                            width: "60%",
                            height: "20%",
                            left:"20%",
                            textAlign:"center",
                            fontSize:"110%",
                            fontFamily:"Roboto,Helvetica,Arial,sans-serif",
                            cursor:"pointer",
                        }}>
                            Expore without Account
                        </div>
                    </div>
                </>
            );
        }

    }
}