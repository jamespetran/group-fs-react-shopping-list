function ShoppingList({list}){
    return (
        <div id="shopping-list">
            {grocery.map((grocery) => {
                <div className="grocery-item">
                    <h3>{grocery.name}</h3>
                    <h3>{grocery.quantity} {grocery.unit}</h3>
                    <button>Buy</button> <button>Remove</button>
                </div>
            })}
        </div>
    )
}

export default ShoppingList;