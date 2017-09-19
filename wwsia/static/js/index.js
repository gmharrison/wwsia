import React from 'react'
import ReactDOM from 'react-dom'
import '../css/styles.scss'
import {HashRouter, Route, BrowserRouter as Router} from 'react-router-dom'
import {Menu} from './components/menu'
import {HomeContainer} from './components/page-containers'

ReactDOM.render(
    <HashRouter>
        <div>
            <Menu />

            <Route exact path="/" component={HomeContainer} />
        </div>

    </HashRouter>, document.getElementById('container'))
