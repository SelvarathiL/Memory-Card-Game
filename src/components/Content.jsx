import {FaTrash} from "react-icons/fa";

export default function Content({tasks,handleChecked,handleDelete})
{
    return(
        <div>
           <ul>
               {tasks.map(task=>(
                    <li key={task.id}>
                        <input type="checkbox" checked={task.checked} onChange={()=>handleChecked(task.id)}/>
                        <span style={{textDecoration:task.checked ? "line-through":"none"}}>{task.task}</span>
                        <button onClick={()=>handleDelete(task.id)} style={{backgroundColor:"white", margin:"2px"}}><FaTrash size={20} color="red"/></button>
                    </li>
               ))}
           </ul>
        </div>
    )
}