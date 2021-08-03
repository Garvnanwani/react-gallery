import React from 'react'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import NotFound from '../pages/404'
import Loading from './Loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
