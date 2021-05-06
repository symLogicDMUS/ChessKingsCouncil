import React, {Component} from "react"
import firebase from "firebase"

class App extends Component {
    state = {isSignedIn: false}

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user})
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>
                        <div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
            </div>
        )
    }
}

export default App
