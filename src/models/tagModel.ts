import { timeStamp } from 'console';
import {Schema, model} from 'mongoose';

const TagModel = new Schema({
    
    name: {
        type: String,
        required:true
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

export default model('tag', TagModel);