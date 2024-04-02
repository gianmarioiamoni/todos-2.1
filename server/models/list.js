import mongoose from "mongoose"
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    icon: String,
    id: String,
    userId: String,
    isAllTodos: Boolean
});

export default mongoose.model("List", listSchema);