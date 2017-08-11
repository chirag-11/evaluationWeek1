import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header.js';
import Content from './components/content.js';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style/style.css";
import Footer from './components/footer.js';
ReactDOM.render(
        <Router>
                <div id="app">
                        <Header />
                        <Content />
                        <Footer />
                </div>
        </Router>

        , document.getElementById('container')
);
