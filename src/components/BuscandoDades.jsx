import { useState } from "react"
import { useEffect } from "react"

// const tarefas = [
//     { id: '1', title: "minha primeira tarefa" },
//     { id: '2', title: "minha segunda tarefa" },
//     { id: '3', title: "minha terceira tarefa" },
//     { id: '4', title: "minha quarta tarefa" },
// ]

export default function BuscandoDados() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function buscandoDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }
        buscandoDados().then(res => setTarefas(res))
    }, [])

    return (
        <div>
            <h1>Buscando Dados</h1>
            <ol>
                {tarefas.map((tarefa) => {
                    return (
                        <li key={tarefa.id}>
                            {tarefa.title}
                            {tarefa.completed ? ' - Tarefa Concluida!' : null}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}