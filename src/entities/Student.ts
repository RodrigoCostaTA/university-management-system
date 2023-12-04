import mongoose, { Document, Schema } from 'mongoose';

interface IStudent extends Document {
  name: string;
  age: number;
  studentId: string;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  studentId: { type: String, required: true },
});

const Student = mongoose.model<IStudent>('Student', studentSchema);

export default Student;