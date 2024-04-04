import axios from 'axios';

// const serverUrl = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_SERVER_URL : import.meta.env.VITE_LOCAL_SERVER_URL;
const serverUrl = "http://localhost:3000";


export async function getAllLists(user) {
    try {
        const orderedListsArray = await axios.get('/server/lists',
            {
                params: {
                    userId: user._id
                }
            }
        );
        
        return orderedListsArray.data;
        
    } catch (err) { console.log(err) }
}

export async function updateList(id, name) {

    try {
        const response = axios.put(`/server/lists/${id}`,
            {
                name: name
            }
        );
        return response.data;
    } catch (err) { console.log(err) }
}

export async function newList(name, icon, userId, isAllTodos = false) {
    try {
        const payload = { name, icon, userId, isAllTodos};
        const res = await axios.post("/server/lists", payload);

        // id field is added to db by the server
        const returnData = { ...res.data, id: res.data._id };

        return returnData;

    } catch (err) { console.log(err) }
}

export async function deleteList(id) {
    try {
        const res = await axios.delete(`/server/lists/${id}`);
        await axios.delete(`/server/lists/${id}/listItems`);

        return res;
    } catch (err) { console.log(err) }
}

export async function getAllTodosListId(user) {
    try {
        const allTodosList = await axios.get("/server/lists/allTodosList",
            {
                params: {
                    userId: user._id
                }
            }
        );
        if (allTodosList.data != null) {
            return allTodosList.data.id;
        }
        else {
            return -1;
        }

    } catch (err) { console.log(err) }
}


