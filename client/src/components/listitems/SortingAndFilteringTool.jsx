import {Checkbox} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import SortRadioButtonGroup from './SortRadioButtonGroup';

export default function SortingAndFilteringTool({ sortSelection, onChangeSort, isCheckedTodayItems, onChangeTodayItems }) {
    return (
        <Grid container spacing={2}>
            <Grid xs={4}>
                {/* Sorting */}
                <SortRadioButtonGroup value={sortSelection || ''} onChange={onChangeSort} />
            </Grid>
            <Grid xs={4}>
                {/* Show Today items only */}
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isCheckedTodayItems}
                                onChange={onChangeTodayItems} />
                        }
                        label="Today's items"
                    />
                </FormGroup>
            </Grid>
        </Grid>
    )
}