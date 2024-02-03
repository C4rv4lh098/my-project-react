import { useState } from "react";

interface Task{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function useTask(pageLimit: number){
    const[tasks, setTasks] = useState<Task[]>([])

    function fetchTasks(page: number){
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