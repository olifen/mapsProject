const mongoose = require('mongoose');

const locationSchema = mongoose.Schema ({
  oldImage: { type: String, trim: true },
  newImage: { type: String, trim: true },
  latitude: { type: Number, trim: true },
  longitude: { type: Number, trim: true }
});

module.exports = mongoose.model('Location', locationSchema);
