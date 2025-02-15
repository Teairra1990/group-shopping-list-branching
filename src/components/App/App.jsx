
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './App.css';
 
    
// it was the import Axios part
//now its running when i deleted it its up
//And now we need Axios again

function App() {
    let [myItemList, setMyItemList] = useState([]);
    let [newMyItemName, setNewMyItemName] = useState('');
    let [newMyItemQuantity, setNewMyItemQuantity] = useState([]);
    let [newMyItemUnit, setNewMyItemUnit] = useState('');
    let [newMyItemPurchsed, setNewMyItemPurchased] = useState('false');

    // const [newMyItemList, setMyItemList] = useState([]);

    const fetchMyItem=() => {// i fixed it
        console.log("in fetchMyItem function")
        axios.get('/api/myItem')    //Why is this breaking the page?// i dont know 
        .then(response => {
            console.log("response is:", response.data)
            setMyItemList(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        console.log("in useEffect")
        fetchMyItem();
    }, [])

    const addMyItem= () => {
        axios.post('/api/myItem', {name: newMyItemName, quantity: newMyItemQuantity, unit: newMyItemUnit, purchased: newMyItemPurchsed })
        .then(response => {
            fetchMyItem();
            setNewMyItemName('');
        setNewMyItemQuantity('');
        setNewMyItemUnit('');
        setNewMyItemPurchased('');
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="App">
            <Header />
            <main>
                <h1> Add to List </h1>
                <form>
                <label>Item: </label>
                <input type="text"></input>
                <label>Quantity: </label>
                <input type="text"></input>
                <label>Unit: </label>
                <input type="text"></input>
                <button variant="contained">Submit</button>
                </form>
            </main>
        </div>
    );
}

export default App;
