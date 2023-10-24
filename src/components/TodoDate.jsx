import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fi';

const locales = ['fi'];

export default function TodoDate(props) {

    const [locale, setLocale] = React.useState('fi');

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <DatePicker
                value={props.todo.date}
                onChange={newDate => props.setTodo({ ...props.todo, date: newDate.$d.toLocaleDateString("fi") })} />
        </LocalizationProvider>
    )
}