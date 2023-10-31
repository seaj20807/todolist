import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fi';

export default function TodoDate(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
            <DatePicker
                value={dayjs(props.todo.date).format("DD.MM.YYYY")}
                onChange={newDate => props.setTodo({ ...props.todo, date: newDate.format("DD.MM.YYYY") })} />
        </LocalizationProvider>
    )

}