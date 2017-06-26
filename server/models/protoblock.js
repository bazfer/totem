const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const ProtoblockSchema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  image_URL: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  isReleased: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });
 
var Protoblock = mongoose.model('Protoblock', ProtoblockSchema);
module.exports = Protoblock;