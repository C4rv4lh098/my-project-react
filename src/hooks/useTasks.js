import { useState } from "react";


export default function useTask(pageLimit){
    const[tasks, setTasks] = useState([])

    function fetchTasks(page){
        const virtualPage = ((page-1) * pageLimit) <= 0
        ? 0 : ((page-1) * pageLimit)

        fetch(`https://jsonplaceholder.typicode.com/todos?_start=${virtualPage}&_limit=${pageLimit}`)
        .then(res => res.json())
        .then(setTasks)
        .catch(window.alert)
    }
    return{
        fetchTasks,
        tasks
    }
}