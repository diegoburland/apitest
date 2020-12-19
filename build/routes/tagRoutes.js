"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tagModel_1 = __importDefault(require("../models/tagModel"));
const moment_1 = __importDefault(require("moment"));
class TagRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tags = yield tagModel_1.default.find();
            res.json(tags);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const tag = yield tagModel_1.default.findById(id);
            res.json(tag);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, hexadecimal } = req.body;
            const now = moment_1.default().format();
            const newTag = new tagModel_1.default({ name, hexadecimal, createdAt: now, updatedAt: now });
            const tagInserted = yield newTag.save();
            res.json({ data: tagInserted });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            const body = req.body;
            const tagUpdated = yield tagModel_1.default.findByIdAndUpdate(_id, body, { new: true });
            res.json({ data: tagUpdated });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            yield tagModel_1.default.findByIdAndDelete(_id);
            res.json({
                response: 'delete success'
            });
        });
    }
    routes() {
        this.router.get('', this.all);
        this.router.get('/:id', this.getById);
        this.router.post('', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}
const tagRoutes = new TagRoutes();
exports.default = tagRoutes.router;
