import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
    <div>
        {[props.list.map(logs => (
            <span>{logs.title}</span>
        ))]}
        <Link to="/" className="home-button">Saved Logs</Link>
    </div>
)

export default SavedList;