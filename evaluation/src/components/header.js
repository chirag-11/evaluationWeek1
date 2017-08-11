import React from "react";
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Image Gallery</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/search">Search</Link> </li>
                                <li><Link to="/details">Details</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}