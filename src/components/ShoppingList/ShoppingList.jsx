import './ShoppingList.css'

function ShoppingList({groceryList}){
    console.log('is working', groceryList);
    console.log(groceryList.map(grocery => grocery.quantity));
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
                            : <><button>Buy</button><button>Remove</button></>}
                    </div>
                ))
            }
        </div>

    );
}

export default ShoppingList;
