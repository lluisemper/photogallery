"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.startConnection = async () => {
    await mongoose_1.default.connect('mongodb://localhost/photo-gallery-db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
};
