import React from 'react';
import { Select, MenuItem, FormControl, FormHelperText, Box, Chip } from '@mui/material';

import { priorityData } from "../../common/priorities";

export default function PrioritySelect({ value, onChange, isLabelVisible = true }) {
    return (
        <Box>
            <FormControl >
                <Select
                    id="severity-select"
                    value={value}
                    onChange={onChange}
                >
                    {priorityData.map((priorityObj, i) => {

                        return <MenuItem
                            key={i}
                            value={priorityObj.value}
                        >
                            <Chip
                                label={priorityObj.name}
                                color={priorityObj.chipColor}
                                key={priorityObj.name}
                                icon={priorityObj.icon}
                                size="small"
                            />
                        </MenuItem>
                    }
                    )}
                </Select>
                {isLabelVisible && <FormHelperText>Priority</FormHelperText>}
            </FormControl>
        </Box>
    );
}
