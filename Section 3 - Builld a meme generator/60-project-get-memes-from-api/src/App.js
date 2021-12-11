import {useState, useEffect} from 'react';
import './App.css';
import Meme from './components/Meme';
import Header from './components/Header';

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}