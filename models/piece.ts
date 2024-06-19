import mongoose from "mongoose";

const pieceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["pawn", "rook", "knight", "bishop", "queen", "king"],
  },
  color: {
    type: String,
    required: true,
    enum: ["white", "black"],
  },
  row: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  col: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  hasMoved: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("piece", pieceSchema);
