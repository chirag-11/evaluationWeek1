import React from "react";
import Home from "./home.js";
import Search from "./search.js";
import Details from "./details.js";
import { Route } from 'react-router-dom';


export default class Content extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/details/:id" component={Details} />


            </div>
        );
    }
}