import {FaPlus} from "react-icons/fa";

export default function AddItem({newTask,setNewTask,handleNewTask})
{
    function handleSubmit(e)
    {
        e.preventDefault();
        handleNewTask(newTask);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Enter New Task : </label>
            <input type="text" required value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            <button type="submit"><FaPlus/></button>
        </form>
    )
}