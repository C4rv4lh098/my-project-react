import { useState } from "react"
import { useEffect } from "react"

export default function DataSearch() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function searchData() {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            return await result.json()
        }
        searchData().then(res => setTasks(res))
    }, [])

    return (
        <div>
            <h3>Buscando Dados</h3>
                {tasks.map((task) => {
                    return (
                        <table id="tableTask" key={task.id}>
                            <thead>
                                <th>Cod.</th>
                                <th>Description</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.completed ? <span id="complet">Tarefa Completa</span> : <span id="incomplet">Tarefa Incompleta</span>}</td>
                            </tbody>
                        </table>
                    )
                })}
        </div>
    )
}