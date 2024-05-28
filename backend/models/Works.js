const mongoose = require("mongoose")

const workSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  obj: { type: String, required: true },
  skills: { type: String, required: true },
  tools: { type: String, required: false },
  pictures: { type: String, required: false },
  repo: { type: String, required: false },
  website: { type: String, required: false },
})

module.exports = mongoose.model("Work", workSchema)
