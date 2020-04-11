import mongoose from 'mongoose';

export const startConnection = async () => {
    await mongoose.connect('mongodb://localhost/photo-gallery-db',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
    
}

