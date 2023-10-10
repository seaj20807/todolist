import { useState } from "react"
import TodoGrid from "./components/TodoGrid"
//import TodoTable from "./components/TodoTable"

export default function Todolist() { // komponentti
    // States
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' })// useState('')

    // Functions
    const handleInputChanged = (event) => // otetaan arvot input kentistä ja asetetaan ne todo-muuttujaan
        setTodo({ ...todo, [event.target.name]: event.target.value })

    const addTodo = () => // lisätään todo listaan
        setTodos([...todos, todo])

    const deleteTodo = (index) => { // poistetaan todo listasta
        setTodos(todos.filter((todo, i) => i !== index))
    }

    // Return
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
            <select
                name="priority"
                value={todo.priority}
                onChange={handleInputChanged}
            >
                <option>Select</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button onClick={addTodo}>
                Add
            </button>

            <TodoGrid
                todos={todos}
                deleteTodo={deleteTodo}
            />

            {/* <TodoTable todos={todos} onDelete={deleteTodo} /> */}

        </>

    )

}

// export default Todolist