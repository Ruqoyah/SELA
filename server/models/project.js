import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
/**
 * Project Schema
 */
const ProjectSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  location: {
    type: String,
    trim: true,
  },
  budget: {
    type: String,
    trim: true,
  },
  progress: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  contractorPicture: {
    type: Array,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model('Project', ProjectSchema);
