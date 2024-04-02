// Radio group
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SortRadioButtonGroup({ value, onChange }) {
    return (
        <FormControl>
            <FormLabel id="sort-radio-buttons-group">sort by: </FormLabel>
            <RadioGroup
                aria-labelledby="sort-radio-buttons-group"
                name="sort-radio-buttons-group"
                defaultValue="Priority+Date"
                row
                value={value}
                onChange={onChange}
            >
                <FormControlLabel value="Priority+Date" control={<Radio />} label="Priority+Date" />
                <FormControlLabel value="Date" control={<Radio />} label="Date" />
            </RadioGroup>
        </FormControl>
    )
}

