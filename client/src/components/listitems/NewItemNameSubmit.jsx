import {
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material';

import { Send } from '@mui/icons-material';

export default function NewItemNameSubmit({ setNewItemText, newItemText, handleAddItem }) {

    return (
        <TextField
            onChange={(event) => {
                setNewItemText(event.target.value);
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleAddItem();
                }
                
            }}
            value={newItemText}
            margin="normal"
            id="new-item"
            label="New Item"
            type="text"
            fullWidth
            variant="filled"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="submit"

                            onClick={() => {
                                document.activeElement.blur();
                                return handleAddItem();
                            }}
                            edge="end"
                        >
                            <Send />
                        </IconButton>
                    </InputAdornment>
                ),

            }}
        />
    )
}