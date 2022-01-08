import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './Survey/SurveyNew';
import * as actions from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/surveys" element={<Dashboard />} />
                        <Route path="/surveys/new" element={<SurveyNew />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);