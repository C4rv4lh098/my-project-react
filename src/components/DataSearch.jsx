/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState, useEffect } from "react"
import Pagination from "./Pagination"
import './css//DataSearchStyles.css'


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
        <div className="dataBoard">
            <table id="tableTask" >
                <thead>
                    <th>Number</th>
                    <th>Description</th>
                    <th>Status</th>
                </thead>
                {currentPosts.map((task) => {
                    return (
                        <tbody key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                                {
                                    task.completed ? <span id="complet">Tarefa Completa <i className="fa-solid fa-check"></i></span> :
                                        <span id="incomplet">Tarefa Incompleta <i className="fa-solid fa-clock"></i></span>
                                }
                            </td>
                        </tbody>
                    )
                })}
            </table>
            <Pagination
                totalPosts={tasks.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}