
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
const Content = () => {
    const [items, setItems] = useState([
        {
            id : 1,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id : 2,
            checked: false,
            item: "item 2"
        },
        {
            id : 3,
            checked: false,
            item: "item 3"
        },
        {
            id : 4,
            checked: false,
            item: "item 4"
        },
        {
            id : 5,
            checked: false,
            item: "item 5"
        }

    ])
    
    const handelCheck = (id)=> {       
      
       const listItems = items.map( (item)=> item.id === id ? { ...item , checked: !item.checked , des: "Danial"} : item  ); 
       setItems(listItems);
    }

    const deleteHandler = (id) =>{
        const listItems = items.filter( (item)=> item.id !== id   );       
       setItems(listItems);
    }

  return (
    <main>
        <ul>
            {items.map((item) =>
                (
                    <li id={item.id} className='item' key={item.id}>
                        <input
                            onChange={()=> handelCheck(item.id)}
                             type="checkbox" 
                             checked={item.checked} 
                        />
                        <label htmlFor="item.id">{item.item}</label>
                        <FaTrashAlt onClick={() => deleteHandler(item.id)}
                            role='button' 
                            tabIndex={0} 
                         />
                    </li>
                )
            )}
        </ul>
        
        
    </main>
    
  )
}

export default Content