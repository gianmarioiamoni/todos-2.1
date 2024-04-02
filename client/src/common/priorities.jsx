import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import dayjs from 'dayjs';


export const priorityData = [
    { value: 1, name: "High", color: "error.main", chipColor: "error", icon: <PriorityHighIcon /> },
    { value: 2, name: "Medium", color: "warning.main", chipColor: "warning", icon: <DragHandleIcon /> },
    { value: 3, name: "Normal", color: "success.main", chipColor: "success", icon: <LowPriorityIcon /> }
];

export function sortItems(a, b, sort = "Priority+Date") {
    switch (sort) {
        case "Priority+Date":
            return a.priority - b.priority || dayjs(a.date) - dayjs(b.date);
        case "Priority":
            return a.priority - b.priority
        case "Date":
            return dayjs(a.date) - dayjs(b.date);;
    
        default:
            break;
    }
    
}

