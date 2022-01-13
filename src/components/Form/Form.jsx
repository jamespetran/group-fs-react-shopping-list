import axios from 'axios';
import { useState } from 'react'

function Form({fetchList}) {

    const [item,setItem] = useState('');
    const [qty,setQty] = useState('');
    const [unit,setUnit] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        let listItem = {
            name: item,
            quantity: qty,
            unit: unit
        }
        console.log(listItem);
        axios.post('/grocery-list',listItem)
        .then(function(response) {

            console.log('Response from POST:', response);
            // refresh DOM
            fetchList();
            // clear form inputs
            setItem('');
            setQty('');
            setUnit('');
        })
        .catch(function(error) {
            console.log('Error in POST:', error);
        });// end POST
    }// end handleSubmit

    // POST can go here


    return(
        <>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Item</label>
                <input id="itemInput" onChange={(event) => setItem(event.target.value)} value={item} required />
                <label>Quantity</label>
                <input id="qtyInput" onChange={(event) => setQty(event.target.value)} value={qty} required />
                <label>Unit</label>
                <input id="unitInput" onChange={(event) => setUnit(event.target.value)} value={unit} />
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form;