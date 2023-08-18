import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {

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

]);

const [newItem,setNewItem] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
}

const handleCheck = (id)=> {       
      
  const listItems = items.map( (item)=> item.id === id ? { ...item , checked: !item.checked , des: "Danial"} : item  ); 
  setItems(listItems);
  localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}

const handleDelete = (id) =>{
   const listItems = items.filter( (item)=> item.id !== id   );       
   setItems(listItems);
   localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}
  
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content
         items={items}         
         handleCheck={handleCheck}
         handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
