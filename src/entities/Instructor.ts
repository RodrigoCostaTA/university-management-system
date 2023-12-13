import mongoose, { Document, Schema, Types } from 'mongoose';

interface IInstructor extends Document {
  name: string;
  email: string;
  courses: Types.ObjectId[];
  instructorId: string;
}

const instructorSchema = new Schema<IInstructor>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  instructorId: { type: String, required: true, unique: true },
});

const Instructor = mongoose.model<IInstructor>('Instructor', instructorSchema);

export default Instructor;