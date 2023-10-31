import * as React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack'
import TodoGrid from "./TodoGrid"
import TodoDate from "./TodoDate"
// import TodoTable from "./components/TodoTable"

export default function Todolist() { // komponentti
    // States
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' })// useState('')

    // Functions

    // Read the input field values and set them to the todo-variable
    const handleInputChanged = (event) =>
        setTodo({ ...todo, [event.target.name]: event.target.value })

    // Add a todo to list
    const addTodo = () =>
        setTodos([...todos, todo])

    // Remove a todo from the list
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    // Remove all todos from the list
    const clearTodos = () => {
        setTodos(todos.splice())
        // setTodos(todos.toSpliced(0)) Testit eivät tunnista funktioksi...
    }

    // gridRef
    const gridRef = useRef()

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert("Choose a row first!")
        } else {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id)
            deleteTodo(removeIndex)
        }
    }

    // Return
    return (
        <>
            <h1>Todo list</h1>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <TextField
                    variant="standard"
                    label="Description"
                    name="description"
                    value={todo.description}
                    onChange={handleInputChanged}
                />
                <TodoDate
                    todo={todo}
                    setTodo={setTodo}
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="prio">Priority</InputLabel>
                    <Select
                        labelId="prio"
                        id="prio"
                        name="priority"
                        value={todo.priority}
                        onChange={handleInputChanged}
                    >
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={addTodo}>
                    Add
                </Button>
                <Button
                    variant="contained"
                    onClick={deleteSelected}>
                    Remove
                </Button>
                <Button
                    variant="contained"
                    onClick={clearTodos}>
                    Clear
                </Button>
            </Stack>

            <TodoGrid
                todos={todos}
                deleteTodo={deleteTodo}
                gridRef={gridRef}
            />

        </>

    )

}

// export default Todolist