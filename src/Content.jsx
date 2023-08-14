
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
        }

    ])
    
    const handelCheck = (id)=> {       
      
       const listItems = items.map( (item)=> item.id === id ? { ...item , checked: !item.checked , des: "Danial"} : item  );
    //    console.log(listItems)
       setItems(listItems);
       console.log(items)
    

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
                        <FaTrashAlt
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