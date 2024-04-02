import { Box, TextField } from "@mui/material";
import * as Icons from '@mui/icons-material';


export default function CurrentListNameAndIcon({ originalListName, setOriginalListName, onListUpdate, icon }) {
    const Icon = Icons[icon];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
                sx={{
                    border: theme => `1px solid ${theme.palette.divider}`,
                    p: 1,
                    mr: 1,
                    borderRadius: '50%',
                    display: 'flex',
                }}
            >
                {Icon ? (
                    <Icon fontSize="large" />
                ) : (
                    <Icons.List fontSize="large" />
                )}
            </Box>
            <TextField
                value={originalListName}
                onChange={event => {
                    setOriginalListName(event.target.value);
                }}
                onBlur={(event) => onListUpdate(event)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                    }
                    onListUpdate(event);

                }}
            />
        </Box>
    )
}