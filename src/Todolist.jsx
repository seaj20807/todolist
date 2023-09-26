import { useState } from "react"

export default function Todolist() { // komponentti
    // states
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ description: '', date: '' })// useState('')

    // functions
    const handleInputChanged = (event) => // otetaan arvot input kentistä ja asetetaan ne todo-muuttujaan
        //setTodo({ ...todo, description: event.target.value })
        setTodo({ ...todo, [event.target.name]: event.target.value })

    const addTodo = () => // lisätään todo listaan
        setTodos([...todos, todo])

    const deleteTodo = (index) => { // poistetaan todo listasta
        setTodos(todos.filter((todo, i) => i !== index))
    }

    const itemRows = todos.map((todo, index) => // renderöidään lista
        <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td>
                <button onClick={() =>
                    deleteTodo(index)}>Delete
                </button>
            </td>
        </tr>
    )

    //return
    return (
        <>
            <h1>Todo list</h1>
            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleInputChanged}
            />
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChanged}
            />
            <button onClick={addTodo}>
                Add
            </button>
            <table>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        </>
    )

}

// export default Todolist