import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        date: { type: Date },
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Task", taskSchema);
