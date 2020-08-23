import mongoose from "mongoose";
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    rollno: { type: Number },
  },
  { collation: "studnets" }
);

module.exports = mongoose.model("Studnet", studentSchema);
