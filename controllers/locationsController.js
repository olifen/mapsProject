const Location = require('../models/location');

function locationsIndex(req, res) {
  Location.find({}, (err, locations) => {
    if (err) res.status(500).json({
      error: err });
      res.json(locations);
  });
}

function locationsCreate(req, res) {
	Location.create(req.body, (err, location) => {
		if(err) res.status(500).json({ error: err});
		res.status(201).json(location);
	});
}

function locationsShow(req, res) {
	Location.findById(req.params.id, (err, location) => {
		if(err) res.status(500).json({ error: err});
		res.json(location);
	});
}

function locationsUpdate(req, res) {
	Location.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, location) => {
		if(err) res.status(500).json({ error: err});
		res.json(location);
	});
}

function locationsDelete(req, res) {
	Location.findByIdAndRemove(req.params.id, (err) => {
		if(err) res.status(500).json({ error: err});
		res.send(204);
	});
}

module.exports = {
  index: locationsIndex,
  create: locationsCreate,
  show: locationsShow,
  update: locationsUpdate,
  delete: locationsDelete
};
