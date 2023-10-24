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
    const handleInputChanged = (event) => // otetaan arvot input kentistä ja asetetaan ne todo-muuttujaan
        setTodo({ ...todo, [event.target.name]: event.target.value })

    const addTodo = () => // lisätään todo listaan
        setTodos([...todos, todo])

    const deleteTodo = (index) => { // poistetaan todo listasta
        setTodos(todos.filter((todo, i) => i !== index))
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
            </Stack>

            <TodoGrid
                todos={todos}
                deleteTodo={deleteTodo}
                gridRef={gridRef}
            />

            {/* <TodoTable todos={todos} onDelete={deleteTodo} /> */}

        </>

    )

}

// export default Todolist