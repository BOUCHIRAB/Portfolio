const Work = require("../models/Works")
const fs = require("fs")

exports.createWork = (req, res, next) => {
  const workObject = JSON.parse(req.body.work)
  delete workObject._id
  delete workObject._userId

  const work = new Work({
    ...workObject,
    userId: req.auth.userId,
    pictures: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }.webp`,
  })

  work
    .save()
    .then(() => {
      res.status(201).json({ message: "Projet enregistré !" })
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}

exports.getOneWork = (req, res, next) => {
  Work.findOne({
    _id: req.params.id,
  })
    .then((work) => {
      res.status(200).json(work)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}

exports.getAllWorks = (req, res, next) => {
  Work.find()
    .then((works) => res.status(200).json(works))
    .catch((error) => res.status(400).json({ error }))
}

exports.modifyWork = (req, res, next) => {
  const workObject = req.file
    ? {
        ...JSON.parse(req.body.work),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }.webp`,
      }
    : { ...req.body }

  delete workObject._userId
  Work.findOne({ _id: req.params.id })
    .then((work) => {
      if (work.userId != req.auth.userId) {
        res.status(403).json({ message: "unauthorized request" })
      } else {
        if (req.file) {
          const filename = work.pictures.split("/images/")[1]
          fs.unlinkSync(`images/${filename}`)
        }

        Work.updateOne(
          { _id: req.params.id },
          { ...workObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Projet modifié!" }))
          .catch((error) => res.status(401).json({ error }))
      }
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}

exports.deleteWork = (req, res, next) => {
  Work.findOne({ _id: req.params.id })
    .then((work) => {
      if (work.userId != req.auth.userId) {
        res.status(403).json({ message: "unauthorized request" })
      } else {
        const filename = work.pictures.split("/images/")[1]
        fs.unlink(`images/${filename}`, () => {
          Work.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Projet supprimé !" })
            })
            .catch((error) => res.status(401).json({ error }))
        })
      }
    })
    .catch((error) => {
      res.status(500).json({ error })
    })
}

