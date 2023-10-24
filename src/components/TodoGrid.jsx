import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import Button from '@mui/material/Button'
import { useRef } from 'react'

export default function TodoGrid(props) {

    // gridRef
    const gridRef = useRef()

    // Columns
    const columns = [
        { headerName: 'Description', field: 'description', sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
        {
            headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ]

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length == 0) {
            alert("Choose a row first!")
        } else {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id)
            props.deleteTodo(removeIndex)
        }
    }

    return (
        <>
            <Button
                variant="contained"
                onClick={deleteSelected}>
                Remove selected
            </Button>
            <div className="ag-theme-material"
                style={{ height: '700px', width: '100%', margin: 'auto' }}>
                <AgGridReact
                    rowData={props.todos}
                    rowSelection='single'
                    animateRows='true'
                    columnDefs={columns}
                    onGridReady={params => gridRef.current = params.api}
                >
                </AgGridReact>
            </div>
        </>
    )

}