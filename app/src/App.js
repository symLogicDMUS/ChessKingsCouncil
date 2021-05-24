import React from "react";
import {getThemes} from "./API/getThemes";
import {recordUser} from "./API/recordUser";
import {queryUserId} from "./API/isNewUser";
import Loading from "./Components/Reuseables/Animations/Loading";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {saveSampleData} from "./API/sampleData/saveSampleData";
import {ThemeContext} from "./Context/ThemeContext";
import {HelpContext} from "./Context/HelpContext";
import {UserContext} from "./Context/UserContext";
import {appDefaultState} from "./appDefaultState";
import * as firebase from "firebase/app";
import {reducer} from "./App.red";
import "firebase/database";
import "firebase/auth";
import "./App.scss";

const Home = React.lazy(() => import("./Components/Home/Home"));
const NewGame = React.lazy(() => import("./Components/NewGame/NewGame"));
const LoadGame = React.lazy(() => import("./Components/LoadGame/LoadGame"));
const GameRoot = React.lazy(() => import("./Components/GameRoot/GameRoot"));
const MyPieces = React.lazy(() => import("./Components/MyPieces/MyPieces"));
const CreatePiece = React.lazy(() => import("./Components/CreatePiece/CreatePiece"));
const Customize = React.lazy(() => import("./Components/NewGame/Customize/Customize"));
const CouncilRules = React.lazy(() => import("./Components/CouncilRules/CouncilRules"));
const NotFound = React.lazy(() => import('./Components/Home/NotFound'));


function App() {
    const [state, dispatch] = React.useReducer(reducer, appDefaultState)

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                queryUserId().then(isReturningUser => {
                    if (isReturningUser) {
                        getThemes().then(themes => {
                            if (themes) {
                                dispatch({type: 'set-themes', themes: themes})
                            }
                            dispatch({type: 'logged-in', user: user})
                        })
                    } else {
                        recordUser().then(r => {
                            saveSampleData().then(r => {
                                dispatch({type: 'logged-in', user: user})
                            })
                        })
                    }
                })
            } else {
                dispatch({type: 'logged-out'})
            }
        });
    }, [])

    const themeValue = React.useMemo(() => ({
        themes: state.themes,
        themeDispatch: dispatch
    }), [state.themes, dispatch]);

    const helpValue = React.useMemo(() => ({
        help: state.help,
        helpDispatch: dispatch
    }), [state.help, dispatch]);

    return (
        <Router>
            <React.Suspense fallback={<Loading/>}>
                <UserContext.Provider value={state.uid}>
                    <ThemeContext.Provider value={themeValue}>
                        <HelpContext.Provider value={helpValue}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/NewGame" component={NewGame}/>
                                <Route exact path="/LoadGame" component={LoadGame}/>
                                <Route exact path="/CreatePiece" component={CreatePiece}/>
                                <Route exact path="/Customize" component={Customize}/>
                                <Route exact path="/Play" component={GameRoot}/>
                                <Route exact path="/MyPieces" component={MyPieces}/>
                                <Route exact path="/CouncilRules" component={CouncilRules}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </HelpContext.Provider>
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </React.Suspense>
        </Router>
    );
}

export default App;