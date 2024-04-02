import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import PrioritySelect from "./PrioritySelect";


export default function NewItemPriorityAndDate({newItemPriority, onChangePriority, selectedDate, handleDateChange}) {

    return (
        <Grid container spacing={2}>
            <Grid xs={4}>
                {/* Add Priority */}
                <PrioritySelect
                    key="priority-select"
                    value={newItemPriority}
                    onChange={onChangePriority} />
            </Grid>
            <Grid xs={4}>
                {/* Add date */}
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Choose an expiring date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            slotProps={{ textField: { variant: 'outlined' } }}
                        />
                    </LocalizationProvider>
                </div>
            </Grid>
        </Grid>
    )
}