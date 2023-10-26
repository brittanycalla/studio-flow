const Shot = require("../models/Shot");
const ObjectID = require('mongodb').ObjectID;

module.exports = {
  createShot: async (req, res) => {
    try {
      let shot = await Shot.create({
        shoot: req.params.id,
        item: req.body.item,
        completed: false,
        userId: req.user.id
      })
      shot = await shot.populate('item').execPopulate() // execPopulate() is deprecated in newer versions of mongoose
      res.json({ shot })
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      const shot = await Shot.findOneAndUpdate(
        { _id: req.params.id },
        { completed: true },
        { new: true }
      );
      res.json({ shot })
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      const shot = await Shot.findOneAndUpdate(
        { _id: req.params.id },
        { completed: false },
        { new: true }
      );
      res.json({ shot })
    } catch (err) {
      console.log(err);
    }
  },
  deleteShot: async (req, res) => {
    try{
        const shot = await Shot.findOneAndDelete({_id:req.params.id})
        res.json({ shot })
    }catch(err){
        console.log(err)
    }
}
};