import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter  as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { blogSlice } from './Reducers/Blog';
const store = configureStore({
    reducer:{
        blogs:blogSlice.reducer
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Router>    
        <App />
    </Router>  
    </Provider>   
);