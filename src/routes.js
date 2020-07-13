import React from 'react';
import Homepage from './components/homepage/homepage.component';
import Login from './components/login/login.component';

export const authenticatedRoutes = [
    {
        path: "/",
        key: "homepage",
        exact: true,
        main: () => <Homepage />
    }
];

export const publicRoutes = [
    {
        path: "/login",
        exact: true,
        key: "login",
        main: () => <Login />
    }
];