import axios from 'axios'

function ListControl({fetchList}) {


    const resetList = () => {
        console.log('in resetList');
        axios.put('/grocery-list')
        .then((response) => {
            console.log('put success', response);
            fetchList();
        })
    }
    const clearList = () => {
        console.log('in ClearList');
        axios.delete('/grocery-list')
        .then((response) => {
            console.log('DELETE success', response);
            fetchList();
        })
        .catch((error) => {
            console.log('Error in DELETE', error);
        });
        //delete all request
        //reset DOM -- reach out to App/fetchList()
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

export default ListControl;