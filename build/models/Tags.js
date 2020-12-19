"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TagSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    hexadecimal: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('tag', TagSchema);
