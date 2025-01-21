import { Schema, model } from "mongoose";

const TemplateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    },
    css: {
        type: String,
        required: true
    },
    js: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Template = model("Template", TemplateSchema);
export default Template;