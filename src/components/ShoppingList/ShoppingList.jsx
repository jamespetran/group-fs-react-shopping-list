import './ShoppingList.css'

function ShoppingList({groceryList}){
    console.log('is working', groceryList);
    console.log(groceryList.map(grocery => grocery.quantity));

    const setBought = (id) => {
        console.log('setting item as bought: ID#', id);
    }

    const removeItem = (id) => {
        console.log('removing item: ID#', id);
        axios.delete(`/grocery-list/${id}`)
        .then((response) => {
            console.log('DELETE success', response);
            fetchList();
        })
        .catch((error) => {
            console.log('Error in DELETE', error);
        });
    }

    return (
        <div id="grocery-list">
            {
                groceryList.map(grocery => (
                    <div key={grocery.id} className="grocery-item">
                        <h3>
                            {grocery.name}
                        </h3>
                        <h3>
                            {grocery.quantity} {grocery.unit}
                        </h3>
                        {grocery.purchased 
                            ? <p>Purchased</p> 
                            : <><button onClick={() => setBought(grocery.id)}>Buy</button><button onClick={() => removeItem(grocery.id)}>Remove</button></>
                            }
                    </div>
                ))
            }
        </div>
    );
}

export default ShoppingList;
