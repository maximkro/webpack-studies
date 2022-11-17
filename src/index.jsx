import React from 'react';
import { render } from 'react-dom';
import { Post } from "@models/Post";
import './styles/styles.css';
import json from './assets/json';
import './styles/scss.scss';
import './babel';

const post = new Post('Webpack post title');
const App = () => (
    <div>
        <div className="container">
            <h1>Webpack Course</h1>
            <hr />
            <div className="logo"></div>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'));