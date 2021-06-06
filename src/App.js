import React from 'react'
import Auth from "./pages/Auth";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Auth/>
            </div>
        </BrowserRouter>
    );
}

export default App;
