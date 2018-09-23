import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './rdx/store';
import Routing from './Routing';

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>
    ,
    document.getElementById('root')
);