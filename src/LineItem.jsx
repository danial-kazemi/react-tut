import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ({ item, handleCheck, handleDelete }) => {   
  return (
    <li id={item.id} className='item' key={item.id}>
        <input
            onChange={()=> handleCheck(item.id)}
                type="checkbox" 
                checked={item.checked} 
        />
        <label 
        style={ (item.checked) ?{ textDecoration : 'line-through'}: null} onDoubleClick={()=> handleCheck(item.id)} htmlFor={item.id}>{item.item}</label>
        <FaTrashAlt onClick={() => handleDelete(item.id)}
            role='button'
            tabIndex='0'
            aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default LineItem