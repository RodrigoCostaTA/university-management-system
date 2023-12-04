import mongoose, { Document, Schema } from 'mongoose';

interface ICourse extends Document {
  code: string;
  title: string;
  credits: number;
  instructor: string;
}

const courseSchema = new Schema<ICourse>({
  code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  credits: { type: Number, required: true },
  instructor: { type: String, required: true },
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export default Course;