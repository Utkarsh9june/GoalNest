import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timeline: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    tags: [
            {
            type: String,
        }
    ],
    status: {
        type: String,
        default: "Not-Started",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("Goal", goalSchema);