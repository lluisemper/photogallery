import {Request, Response} from 'express';
import path from 'path';
import fs from 'fs-extra';

import Photo from '../models/Photo'

export const getPhotos = async (req: Request, res: Response):Promise<Response> => {
    const photos = await Photo.find();
    return res.json(photos);
}

export const getPhoto = async (req: Request, res: Response):Promise<Response> => {
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
}

export const createPhoto = async (req: Request, res: Response):Promise<Response> => {
    const { title, description } = req.body;
    
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    await photo.save();
    
    return res.json({
        message: 'Photo saved',
        photo
    })
}

export const deletePhoto = async (req: Request, res: Response):Promise<Response> => {
    const {id} = req.params
    const photo = await Photo.findByIdAndRemove(id);
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo delted',    
        photo
    });
}

export const updatePhoto = async (req: Request, res: Response):Promise<Response> => {
    const {id} = req.params
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, {new: true});
    
    return res.json({
        message: 'Photo updated',    
        updatedPhoto
    });
}