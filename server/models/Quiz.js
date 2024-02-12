import { Schema, model } from "mongoose";

const quizSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questionNumber: {
      type: Number,
    },
    questions: [
      {
        questionText: String,
        answerOptions: [String],
        correctAnswer: String,
      },
    ],
    isActive: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Quiz = model("Quiz", quizSchema);

export default Quiz;

