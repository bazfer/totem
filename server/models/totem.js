const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const Block = require('./block');

const TotemSchema = new Schema({
  seq: {
    type: Number,
    default: 0,
    required: true
  },
  // title
  title: {
    type: String,
    required: true
  },
  // block_count
  block_count: {
    type: Number,
    required: true
  },

  // pixel_height
  pixel_height: {
    type: Number,
    required: true
  },
  // time_total
  time_total: {
    // AN INTEGER REPRESENTING TOTAL MINUTES - CONVERT TO TIME IN FRONTEND
    type: Number,
    required: true
  },
  // completed
  completed: {
    type: Boolean,
    required: true
  },
  // one-to-many association
  blocks: [Block]
}, 
  { timestamps: true } 
);

module.exports = TotemSchema;