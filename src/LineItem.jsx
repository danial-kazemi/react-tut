import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ({ item, handelCheck, handelDelete }) => {   
  return (
    <li id={item.id} className='item' key={item.id}>
        <input
            onChange={()=> handelCheck(item.id)}
                type="checkbox" 
                checked={item.checked} 
        />
        <label 
        style={ (item.checked) ?{ textDecoration : 'line-through'}: null} onDoubleClick={()=> handelCheck(item.id)} htmlFor={item.id}>{item.item}</label>
        <FaTrashAlt onClick={() => handelDelete(item.id)}
            role='button' 
            tabIndex='0'
            aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default LineItem