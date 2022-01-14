import axios from 'axios';
import { useState } from 'react';
import './Form.css'

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
        axios.post('/grocery-list', listItem)
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


    return (
        <>
            <h2 id="itemHeader">Add an Item</h2>
                <form id="itemForm" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                        <label className="form-label">Item</label>
                        <input className="form-control" id="itemInput" onChange={(event) => setItem(event.target.value)} value={item} required />
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Quantity</label>
                                <input className="form-control" id="qtyInput" onChange={(event) => setQty(event.target.value)} value={qty} required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Unit</label>
                                <input className="form-control" id="unitInput" onChange={(event) => setUnit(event.target.value)} value={unit} />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Save</button>
                </form>
        </>
    )
}

export default Form;