import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import "./app.css"

const App = () => {

    const data = [

        {label: 'Going to learn React', impotant: true, id: 'qewqr'},
        {label: 'That is good', impotant: false, id: '543ret'},
        {label: 'I need a break...', impotant: false, id: '5567jhg'}
    ];
    return (
        <div className='wrapper'>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data} />
            <PostAddForm/>
        </div>
    )
}

export default App;