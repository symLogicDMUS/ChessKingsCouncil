import React, {Suspense, lazy} from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import NotFound from "./Components/Home/NotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loading from "./Components/Reuseables/Animations/Loading";
import {UserContext} from "./UserContext";
import "./App.scss";
import {queryUserId} from "./API/isNewUser";
import {saveSampleData} from "./API/sampleData/saveSampleData";

const Home = lazy(() => import("./Components/Home/Home"));
const NewGame = lazy(() => import("./Components/NewGame/NewGame"));
const LoadGame = lazy(() => import("./Components/LoadGame/LoadGame"));
const GameRoot = lazy(() => import("./Components/GameRoot/GameRoot"));
const MyPieces = lazy(() => import("./Components/MyPieces/MyPieces"));
const CreatePiece = lazy(() => import("./Components/CreatePiece/CreatePiece"));
const Customize = lazy(() => import("./Components/NewGame/Customize/Customize"));
const CouncilRules = lazy(() => import("./Components/CouncilRules/CouncilRules"));


export class App extends React.Component {
    state = {
        uid: null,
        isSignedIn: false,
        isAnonymous: false
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                queryUserId().then(isReturningUser => {
                    if (isReturningUser) {
                        this.setState({uid: user.uid, isSignedIn: !!user, isAnonymous: user.isAnonymous})
                    }
                    else {
                        saveSampleData().then(r => {
                            this.setState({uid: user.uid, isSignedIn: !!user, isAnonymous: user.isAnonymous})
                        })
                    }
                })
            }
            else {
                this.setState({uid: null, isSignedIn: false, isAnonymous: false})
            }
        });
    }

    render() {
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
    }
}