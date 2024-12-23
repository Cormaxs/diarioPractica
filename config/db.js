

import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb://adminInfonoa:infonoa24@45.236.128.209:27017/Noticias?authSource=admin',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}
