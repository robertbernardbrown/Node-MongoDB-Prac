const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  friends: { type: Array },
  dateAccessed: { type: Date, default: Date.now }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;