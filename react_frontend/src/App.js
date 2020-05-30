import React from "react"
import {Board} from "./components/Board";
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect 
} from "react-router-dom"


//Pages


/**All the routing happens inside the App.js component */
class App extends React.Component {
    render(){
        /**
         * Like a container that takes all the routes to the different pages.
         * each Route lists first a path, then the component that's rendered when that path is taken 
         */
        return (
            <Router>
                <Route path="/" Component={} />
            </Router>
        );    
    }
}

export default {App}