import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import Form from '../Form/Form'
import './App.css';

function App() {
    const [groceryList, setGroceryList] = useState([]);
    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = () => {
    axios.get('/grocery-list').then((res) => {
        console.log('GET List', res);
        setGroceryList(res.data)
    }).catch((err) => {
        console.log('ERR GET list', err);
    })
    }

    return (
        <div className="App">
            <Header />
            <Form />
            <main>
                <p>Under Construction...</p>
                <ShoppingList />
            </main>
        </div>
    );
}

export default App;
