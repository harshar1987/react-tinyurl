import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import {RedirectUrl} from "./components/RedirectUrl";

const App = () =>
    (<ErrorBoundary>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path ="/:shortCode" component={RedirectUrl} />
            </Switch>
        </Router>
    </ErrorBoundary>);

export default App;



