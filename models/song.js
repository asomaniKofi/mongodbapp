import mongoose, { Schema } from 'mongoose';

const songSchema = new Schema({
    title: String,
    description: String,
}, {
    timestamps: true
});

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

export default Song;