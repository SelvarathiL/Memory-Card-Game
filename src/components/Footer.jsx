export default function Footer({tasks})
{
    const filtered = tasks.filter(task=>task.checked);
    return(
        <div>
            <h4>Total Tasks : {tasks.length} {tasks.length<=1?"Task" : "Tasks"}</h4>
            <h3>Finished : {filtered.length} {filtered.length<=1?"Task" : "Tasks"}</h3>
            <h3>Pending : {tasks.length-filtered.length} {tasks.length-filtered.length<=1?"Task" : "Tasks"}</h3>
        </div>
    )
}