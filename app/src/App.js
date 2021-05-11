import React, {lazy, Suspense, useEffect, useReducer} from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import NotFound from "./Components/Home/NotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Loading from "./Components/Reuseables/Animations/Loading";
import {saveSampleData} from "./API/sampleData/saveSampleData";
import {UserContext} from "./UserContext";
import {queryUserId} from "./API/isNewUser";
import {reducer} from "./App.red";
import "./App.scss";

const Home = lazy(() => import("./Components/Home/Home"));
const NewGame = lazy(() => import("./Components/NewGame/NewGame"));
const LoadGame = lazy(() => import("./Components/LoadGame/LoadGame"));
const GameRoot = lazy(() => import("./Components/GameRoot/GameRoot"));
const MyPieces = lazy(() => import("./Components/MyPieces/MyPieces"));
const CreatePiece = lazy(() => import("./Components/CreatePiece/CreatePiece"));
const Customize = lazy(() => import("./Components/NewGame/Customize/Customize"));
const CouncilRules = lazy(() => import("./Components/CouncilRules/CouncilRules"));

function App() {
    const [state, dispatch] = useReducer(reducer, {
        uid: null,
        isSignedIn: false,
        isAnonymous: false
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                queryUserId().then(isReturningUser => {
                    if (isReturningUser) {
                        dispatch({type: 'logged-in', user: user})
                    }
                    else {
                        saveSampleData().then(r => {
                            dispatch({type: 'logged-in', user: user})
                        })
                    }
                })
            }
            else {
                dispatch({type: 'logged-out'})
            }
        });
    }, [])

    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <UserContext.Provider value={state.uid}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
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

export default App;