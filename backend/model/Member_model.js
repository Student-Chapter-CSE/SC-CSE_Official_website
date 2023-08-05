import mongoose from "mongoose";

const memberModel = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    rollno: { type: String, required: true, trim: true },
    memberOf: {
      type: String,
      enum: ["tech_team", "design_team", "pr_team"],
      trim: true,
    },
    picture: { type: String, trim: true },
    courseCompletionYear: { type: String, trim: true },
    section: { type: String, trim: true },
    phonenumber: { type: String, required: true, trim: true },
    paymentDone: { type: Boolean, trim: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Member = mongoose.model("Member", memberModel);
export default Member;
