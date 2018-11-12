import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { ErrorBoundary } from "./common/ErrorBoundary";
import {RedirectUrl} from "./RedirectUrl";

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



