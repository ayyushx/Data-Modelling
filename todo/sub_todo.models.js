import mongoose from "mongoose"

const subTodos = new mongoose.Schema({});

export const SubTodo = mongoose.model("SubTodo", subTodos);