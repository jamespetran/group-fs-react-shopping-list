function ListControl() {


    const resetList = () => {
        console.log('in resetList');
        
    }
    const clearList = () => {
        console.log('in ClearList');
    }
    return (
        <>
            <h2>Shopping List!</h2>
            <div>
                <button onClick={resetList}>Reset</button>
            </div>
            <div>
                <button onClick={clearList}>Clear</button>
            </div>
        </>
    )

}

export default ListControl