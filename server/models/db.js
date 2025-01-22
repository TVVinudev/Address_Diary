import mongoose, { Schema } from "mongoose";

const userData = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true},
    address: { type: String, required: true },
    phone: { type: String, required: true }

})

const UserData = mongoose.model('UserData', userData);

mongoose.connect('mongodb://localhost:27017/Address_Diary');

export { UserData };