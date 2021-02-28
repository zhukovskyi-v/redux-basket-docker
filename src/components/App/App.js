import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header';
import {BasketPage, HomePage,} from '../pages';
import './app.css';
import store from "../../store";
import {pageLoaded} from "../../actions";


export default class App extends Component {
    componentDidMount() {
        store.dispatch(pageLoaded())
    }

    render() {
        return (
            <main role="main" className="container">
                <Header/>
                <Switch>
                    <Route
                        path="/"
                        component={HomePage}
                        exact/>
                    <Route
                        path="/basket"
                        component={BasketPage}
                    />
                </Switch>
            </main>
        );
    }
}
