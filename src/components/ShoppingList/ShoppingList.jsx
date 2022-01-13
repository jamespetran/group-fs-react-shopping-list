import './ShoppingList.css'

function ShoppingList({groceryList}){
    console.log('is working', groceryList);
    console.log(groceryList.map(grocery => grocery.quantity));

    const setBought = (id) => {
        console.log('setting item as bought: ID#', id);
    }
    return (
        <>
            <h2>Shopping List</h2>
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
                            <button onClick={() => setBought(grocery.id)}>
                                Buy
                            </button>
                            <button>
                                Remove
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ShoppingList;