import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import Form from '../Form/Form'
import './App.css';
import ListControl from '../ListControl/ListControl'

function App() {
    const [groceryList, setGroceryList] = useState([]);
    useEffect(() => {
        console.log('in use effect');
        fetchList();
    }, []);

    const fetchList = () => {
    axios.get('/grocery-list').then((res) => {
        console.log('GET List', res.data);
        setGroceryList(res.data)
    }).catch((err) => {
        console.log('ERR GET list', err);
    })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <Form fetchList = {fetchList} />
                <ListControl fetchList={fetchList}/>                
                <ShoppingList fetchList={fetchList} groceryList={groceryList} />
            </main>
        </div>
    );
}

export default App;
