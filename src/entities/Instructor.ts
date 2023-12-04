import mongoose, { Document, Schema } from 'mongoose';

interface IInstructor extends Document {
  name: string;
  email: string;
  courses: string[];
}

const instructorSchema = new Schema<IInstructor>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: { type: [String], default: [] },
});

const Instructor = mongoose.model<IInstructor>('Instructor', instructorSchema);

export default Instructor;