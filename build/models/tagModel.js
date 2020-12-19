"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TagModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    hexadecimal: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
});
exports.default = mongoose_1.model('tag', TagModel);
