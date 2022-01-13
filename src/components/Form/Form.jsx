import { useState } from 'react'

function Form() {

    const [item,setItem] = useState('');
    const [qty,setQty] = useState('');
    const [unit,setUnit] = useState('');


    const handleSubmit = (event) => {
        let listItem = {
            name: item,
            quantity: ,
            unit: 

        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Item</label>
            <input id="itemInput" onChange={(event) => setItem(event.target.value)} value={item}/>
            <label>Quantity</label>
            <input id="qtyInput" onChange={(event) => setQty(event.target.value)} value={qty} />
            <label>Unit</label>
            <input id="unitInput" onChange={(event) => setUnit(event.target.value)} value={unit} />
            <input type="submit"></input>
        </form>
    )
}

export default Form;