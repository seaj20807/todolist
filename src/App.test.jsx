import { test, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import Todolist from "./components/Todolist"

test("Render the Todolist component", () => {
    render(<Todolist />)
    const header = screen.getByText(/Todo list/i)
    expect(header).toBeInTheDocument()
})

test("Testing the Add function", () => {
    render(<Todolist />)
    const description = screen.getByLabelText("Description")
    fireEvent.change(description, { target: { value: "Testing" } })
    const date = screen.getByPlaceholderText("DD.MM.YYYY")
    fireEvent.change(date, { target: { value: "01.01.2024" } })
    const button = screen.getByText("Add")
    fireEvent.click(button)
    const table = screen.getByTestId("table")
    expect(table).toHaveTextContent(/Testing/i)
})

test("Testing the Clear function", () => {
    render(<Todolist />)
    const description = screen.getByLabelText("Description")
    fireEvent.change(description, { target: { value: "Testing" } })
    const date = screen.getByPlaceholderText("DD.MM.YYYY")
    fireEvent.change(date, { target: { value: "01.01.2024" } })
    const addButton = screen.getByText("Add")
    fireEvent.click(addButton)
    const clearButton = screen.getByText("Clear")
    fireEvent.click(clearButton)
    const table = screen.queryByTestId("table")
    expect(table).not.toHaveTextContent(/Testing/i)
})
