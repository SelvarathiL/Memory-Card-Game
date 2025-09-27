//import { FaSearch } from "react-icons/fa"

export default function({search,setSearch,handleFilter})
{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search tasks : </label>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button type="submit">search</button>
        </form>
    )
}