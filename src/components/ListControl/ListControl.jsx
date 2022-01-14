import axios from 'axios'
import './ListControl.css'

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
            <div id="controlButtons">
                <div>
                    <button className="btn btn-danger" onClick={resetList}>Reset</button>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={clearList}>Clear</button>
                </div>
            </div>
        </>
    )

}

export default ListControl;