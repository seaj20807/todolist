import { useState } from "react"
import TodoTable from "./components/TodoTable"

export default function Todolist() { // komponentti
    // states
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ description: '', date: '' })// useState('')

    // functions
    const handleInputChanged = (event) => // otetaan arvot input kentistä ja asetetaan ne todo-muuttujaan
        setTodo({ ...todo, [event.target.name]: event.target.value })

    const addTodo = () => // lisätään todo listaan
        setTodos([...todos, todo])

    const deleteTodo = (index) => { // poistetaan todo listasta
        setTodos(todos.filter((todo, i) => i !== index))
    }

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

            <TodoTable todos={todos} onDelete={deleteTodo} />

        </>

    )

}

// export default Todolist