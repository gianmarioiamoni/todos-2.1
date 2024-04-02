import mongoose from "mongoose"
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
    name: String,
    checked: Boolean,
    id: String,
    priority: {
        type: Number,
        min: 1,
        max: 3
    },
    date: Date,
    listId: String,
    userId: String
    // listId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "List"
    // }
});

export default mongoose.model("ListItem", listItemSchema);