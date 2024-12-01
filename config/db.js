

import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb://admin:admin@45.236.130.230:27017/infonoa24?authSource=admin', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            console.log('Conexión exitosa a MongoDB');
        } catch (error) {
            console.error('Error al conectar a MongoDB:', error);
            process.exit(1);
        }
    }