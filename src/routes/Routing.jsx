import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesListed } from "./RoutesList";

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    {RoutesListed.map((entry, index) => {
                        return <Route key={index} exact path={entry.path} element={entry.comp} />
                    })}
                </Routes>
            </Router>
        )
    }
}
