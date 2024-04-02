import ListItem from "../models/listItem.js";

export async function deleteListItem(req, res, next) {
    await ListItem.findByIdAndDelete((req.params.id));
    res.send("todo successfully deleted");
}

export async function updateListItem(req, res, next) {
    await ListItem.findByIdAndUpdate((req.params.id),
        { ...req.body }
    )
}

export async function getListItems(req, res, next) {
    const { userId } = req.query;
    const data = await ListItem.find({ userId: userId}).exec();
    res.send(data);
}

export async function addListItem(req, res, next) {
    const { name, checked, priority, listId, userId, date } = req.body;
    const savedData = await new ListItem({
        name: name,
        checked: checked,
        priority: priority,
        date: date,
        listId: listId,
        userId: userId
    }).save()

    const newStrId = savedData._id.valueOf();
    const newId = savedData._id;

    const newSavedData = await ListItem.findByIdAndUpdate(newId, { id: newStrId });

    res.send(newSavedData);

}