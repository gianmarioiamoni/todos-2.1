import axios from "axios";

import { sortItems } from "../common/priorities";

// const serverUrl = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_SERVER_URL : import.meta.env.VITE_LOCAL_SERVER_URL;
// const serverUrl = "http:/localhost:3000";

export async function getAllTodosListItems(user) {
    try {
        const resItems = await axios.get(`/server/listItems`,
            {
                params:
                    { userId: user._id }
            }
        );
        const resList = await axios.get(`/server/lists/allTodosList`, {
            params:
                { userId: user._id }
        });

        const returnData = { ...resList?.data, items: resItems?.data.sort((a, b) => sortItems(a, b)) };

        return returnData;

    } catch { (err) => console.log(err) }
}

export async function getListItems(listId) {
    try {

        const resItems = await axios.get(`/server/lists/${listId}/listItems`, { withCredentials: false });
        const resList = await axios.get(`/server/lists/${listId}`, { withCredentials: false });

        const returnData = { ...resList?.data, items: resItems?.data.sort((a, b) => sortItems(a, b)) };

        return returnData;

    } catch { (err) => console.log(err) }
}

export async function newItem(newItemName, listId, userId, priority = 3, date) {
    try {
        const payload = {
            name: newItemName,
            checked: false,
            priority: priority,
            listId: listId,
            userId: userId,
            date: date
        };
        const res = await axios.post("/server/listItems", payload);

        const returnData = { ...res.data, id: res.data._id };
        return returnData;

    } catch (err) { console.log(err) }
}

export async function deleteItem(id) {
    try {
        const res = await axios.delete(`/server/listItems/${id}`);
        return res.data;
    } catch { (err) => console.log(err) }
}

export async function toggleChecked(id, isChecked) {
    try {
        const response = await axios.put(`/server/listItems/${id}`,
            {
                checked: isChecked
            }
        );
        return response.data;

    } catch (err) { console.log(err) }
}

export async function updateItem(id, text, priority, date) {
    try {

        let payload;
        if (text != null) {
            payload = { name: text };
        }
        if (priority != null) {
            payload = {...payload, priority: priority}
        }
        if (date != null) {
            payload = { ...payload, date: date }
        }
        const response = await axios.put(`/server/listItems/${id}`, payload);
        return response.data;

    } catch (err) { console.log(err) }

}
