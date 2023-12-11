import mongoose, { Document, Schema, Types } from 'mongoose';

interface IEnrollment extends Document {
  student: Types.ObjectId ;
  course: Types.ObjectId;
  enrollmentDate: Date;
}

const enrollmentSchema = new Schema<IEnrollment>({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  enrollmentDate: { type: Date, default: Date.now },
});

const Enrollment = mongoose.model<IEnrollment>('Enrollment', enrollmentSchema);

export default Enrollment;