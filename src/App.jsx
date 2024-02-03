// import DataSearch from "./components/DataSearch"
import { useEffect } from "react"
import Header from "./components/header"
import useTask from "./hooks/useTasks"
import usePagination from "./hooks/usePagination"

function App() {
  const { tasks, fetchTasks } = useTask(5)
  const { actualPage, setActualPage } = usePagination()

  useEffect(() => {
    fetchTasks(actualPage)
  }, [actualPage])


  return (
    <div>
      <Header />
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
      <div>
        {
          Array(5).fill(' ').map((_, index) =>{
            return(
              <button key={index} onClick={() => setActualPage(index + 1)}>
                {index + 1}
              </button>
            )
          })
        }
      </div>

      {/* <DataSearch /> */}
    </div>
  )
}

export default App
