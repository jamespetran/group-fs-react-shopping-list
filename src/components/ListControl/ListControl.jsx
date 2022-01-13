import axios from 'axios'

function ListControl() {


    const resetList = () => {
        console.log('in resetList');
        axios.put('/grocery-list')
        .then((response) => {
            console.log('put success', response);
        })
    }
    const clearList = () => {
        console.log('in ClearList');
    }
    return (
        <>
            <div>
                <button onClick={resetList}>Reset</button>
            </div>
            <div>
                <button onClick={clearList}>Clear</button>
            </div>
        </>
    )

}

export default ListControl;