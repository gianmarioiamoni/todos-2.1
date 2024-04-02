import axios from 'axios';

// const serverUrl = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_SERVER_URL : import.meta.env.VITE_LOCAL_SERVER_URL;
const serverUrl = "http://localhost:3000";


export async function getAllLists(user) {
    try {
        const orderedListsArray = await axios.get(serverUrl + '/lists',
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
        const response = axios.put(serverUrl + `/lists/${id}`,
            {
                name: name
            }
        );
        return response.data;
    } catch (err) { console.log(err) }
}

export async function newList(name, icon, userId, isAllTodos=false) {
    // const newListData = {
    //     name: name,
    //     icon: icon,
    //     userId,
    //     id: crypto.randomUUID(),

    // };
    try {
        const payload = { name: name, icon: icon, userId: userId, isAllTodos: isAllTodos};
        const res = await axios.post(serverUrl + "/lists", payload);

        // id field is added to db by the server
        const returnData = { ...res.data, id: res.data._id };

        return returnData;

    } catch (err) { console.log(err) }
}

export async function deleteList(id) {
    try {
        const res = await axios.delete(serverUrl + `/lists/${id}`);
        await axios.delete(serverUrl + `/lists/${id}/listItems`);

        return res;
    } catch (err) { console.log(err) }
}

export async function getAllTodosListId(user) {
    try {
        const allTodosList = await axios.get(serverUrl + "/lists/allTodosList",
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


