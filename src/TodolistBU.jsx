import { useState } from "react"

export default function Todolist() { // komponentti
    // states
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    // functions
    //return
    return (
        <>
            <h1>Todo list</h1>
            <input
                type="text"
                name="todo"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button onClick={() => setTodos([...todos, todo])}>
                Add
            </button>
            <table>
                <tbody>
                    {todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )

}

// export default Todolist