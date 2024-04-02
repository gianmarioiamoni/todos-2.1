import { Chip } from '@mui/material';

import { priorityData } from "../../common/priorities"
import PrioritySelect from "./PrioritySelect"

export default function ShowAndEditPriority({ id, priority, data, isEdit, toggleIsPriorityEdit, onChangeUpdateItemPriority }) {
    function getEditId(id) {
        return isEdit.findIndex(i => i.id === id);
    }
    return (
        <div>
            {(!isEdit[getEditId(id)]?.priorityEdit) ? (
                <Chip
                    label={priorityData.find(p => p.value === priority).name}
                    color={priorityData.find(p => p.value === priority).chipColor}
                    icon={priorityData.find(p => p.value === priority).icon}
                    size="small"
                    sx={{ marginRight: "5px" }}
                    onClick={() => toggleIsPriorityEdit(id)}
                />
            ) : (
                <PrioritySelect
                    key={`priority-select-${id}`}
                    value={data.items.find(item => item.id === id).priority}
                    onChange={(event) => onChangeUpdateItemPriority(event, id)}
                    isLabelVisible={false} />
            )}
        </div>
    )
}