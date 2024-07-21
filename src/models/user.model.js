import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // Corrige el typo de 'uniqued' a 'unique'
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


// Middleware para hashear la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
    // Si la contraseña no ha sido modificada, pasa al siguiente middleware
    if (!this.isModified('password')) {
        return next();
    }

    // Genera una sal y hashea la contraseña
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model('User', userSchema);
