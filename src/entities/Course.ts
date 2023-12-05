import mongoose, { Document, Schema, Types } from 'mongoose';

interface ICourse extends Document {
  code: string;
  title: string;
  credits: number;
  instructor: Types.ObjectId;
  students: Types.ObjectId[];
}

const courseSchema = new Schema<ICourse>({
  code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  credits: { type: Number, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export default Course;