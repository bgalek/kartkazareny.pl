import React from 'react'
import { createRoot } from 'react-dom/client';
import data from '../data.json'
import App from './App'
import './index.css'

const container = document.getElementById('root');
createRoot(container).render(
    <React.StrictMode>
        <App items={data.items}/>
    </React.StrictMode>
);