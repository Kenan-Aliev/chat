import React from 'react'
import {Auth} from "./pages/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from './pages/index'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="wrapper">
                    <Route path={['/', '/login', '/register']} exact component={Auth}/>
                    <Route path={'/home'} exact component={Home}/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
