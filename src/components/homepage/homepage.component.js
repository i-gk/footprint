import React, { useEffect } from 'react';

import './homepage.styles.css'
import { useHistory } from 'react-router-dom';

export default function Homepage(props) {

    let history = useHistory();

    useEffect(() => {
       history.push('/login')
    }, []);

    return (
        <h3>Homepage</h3>
    )
}