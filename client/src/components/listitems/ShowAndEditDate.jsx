import { Typography } from '@mui/material';

import { HighlightedText } from "../../common/themes";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';

export default function ShowAndEditDate({
    id,
    data,
    isEdit,
    toggleIsDateEdit,
    selectedDate,
    onChangeUpdateItemDate }) {
    
    function getItemData(id) {
        return data.items?.find(item => item.id === id);
    }

    function getEditId(id) {
        return isEdit.findIndex(i => i.id === id);
    }

    return (
        <div>
            {(!isEdit[getEditId(id)]?.dateEdit) ? (
                <div >
                    {(dayjs(getItemData(id).date).format('DD/MM/YYYY') === dayjs(new Date()).format('DD/MM/YYYY')) ? (
                        <HighlightedText
                            onClick={() => toggleIsDateEdit(id)}
                            variant="body1">
                            {dayjs(getItemData(id).date).format('DD/MM/YYYY')}
                        </HighlightedText>
                    ) : (
                        <Typography
                            onClick={() => toggleIsDateEdit(id)}
                            variant="body1"
                            sx={{ mx: "20px", p: '4px 8px' }}>
                            {dayjs(getItemData(id).date).format('DD/MM/YYYY')}
                        </Typography>
                    )}
                </div>
            ) : (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Choose an expiring date"
                        value={selectedDate}
                        onChange={(date) => onChangeUpdateItemDate(date, id)}
                        slotProps={{ textField: { variant: 'outlined' } }}
                    />
                </LocalizationProvider>
            )}
        </div>
    )
}