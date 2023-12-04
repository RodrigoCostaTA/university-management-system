import mongoose, { Document, Schema } from 'mongoose';

interface IUniversity extends Document {
  name: string;
  location: string;
  coursesOffered: string[];
}

const universitySchema = new Schema<IUniversity>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  coursesOffered: { type: [String], default: [] },
});

const University = mongoose.model<IUniversity>('University', universitySchema);

export default University;