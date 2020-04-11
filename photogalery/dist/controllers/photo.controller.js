"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
exports.getPhotos = async (req, res) => {
    const photos = await Photo_1.default.find();
    return res.json(photos);
};
exports.getPhoto = async (req, res) => {
    const photo = await Photo_1.default.findById(req.params.id);
    return res.json(photo);
};
exports.createPhoto = async (req, res) => {
    const { title, description } = req.body;
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo saved',
        photo
    });
};
exports.deletePhoto = async (req, res) => {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Photo delted',
        photo
    });
};
exports.updatePhoto = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Photo_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Photo updated',
        updatedPhoto
    });
};
