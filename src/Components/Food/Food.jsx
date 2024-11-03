import { useEffect } from "react";
import { useState } from "react";
import List from "../list/List";

const Food = ({handleOder}) => {
const [items , setItems]=useState([])
useEffect(()=>{
    fetch('Rahat.json')
    .then(res => res.json())
    .then(data => setItems(data))
},[])
    return (
        <div >
        
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1">
                {
                   items.map(item => <List item={item} handleOder={handleOder}  key={item.id}></List>)
                }
            </div>
            
        </div>
    );
};

export default Food;