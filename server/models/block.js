const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
// const Protoblock = require('./protoblock');

const BlockSchema = new Schema({
  
  // status - 'active', 'paused', 'completed'
  status: {
    type: String,
    required: true
  },
  // time in minutes
  time: {
    type: Number,
    required: true
  },
  // notes
  notes: {
    type: String,
  },
  // was a milestone reached in this block?
  milestone: {
    type: Boolean,
    required: true
  },
  // was the totem completed in this block?
  isCrown: {
    type: Boolean,
    required: true
  },
  isBase: {
    type: Boolean,
    required: true
  },
  protoblock: {
    type: Schema.Types.ObjectId,
    ref: 'Protoblock'
  }
}, { timestamps: true });
 
module.exports = BlockSchema;