import React from "react"
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect 
} from "react-router-dom"


//Pages
import {MainPage} from "./pages/MainPage";
import {API as Standard} from "./pages/Game/Standard";


/**All the routing happens inside the App.js component */
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataDict = this.props.dataDict;
    }
    render() {
        /**
         * Like a container that takes all the routes to the different pages.
         * each Route lists first a path, then the component that's rendered when that path is taken 
         */
        let dataDict = this.dataDict
        return (
            <Router>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
                <Switch>
                    <Route path="/Standard" component={Standard} />
                </Switch>
            </Router>
        );    
    }
}