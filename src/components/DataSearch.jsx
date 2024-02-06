/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState, useEffect } from "react"
import Pagination from "./Pagination"


export default function DataSearch() {
    const [tasks, setTasks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPages] = useState(10)

    useEffect(() => {
        async function searchData() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

            setTasks(response.data);
        }
        searchData()

    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = tasks.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <h3>Buscando Dados</h3>
            {currentPosts.map((task) => {
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
            <Pagination 
                totalPosts={tasks.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}