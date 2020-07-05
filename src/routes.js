import React from 'react';
import { Homepage } from './components/homepage';
import { Login } from './components/login';

const routes = [
    {
        path: "/",
        key: "homepage",
        exact: true,
        main: () => <Homepage />
    },
    {
        path: "/login",
        exact: true,
        key: "login",
        main: () => <Login />
    }
]

export default routes;