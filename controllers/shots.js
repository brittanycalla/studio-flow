const Shot = require("../models/Shot");
const ObjectID = require('mongodb').ObjectID;

module.exports = {
  createShot: async (req, res) => {
    try {
      await Shot.create({
        shoot: req.params.id,
        item: req.body.item,
        completed: false,
        userId: req.user.id
      });
      res.redirect("/shoot/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteShot: async (req, res)=>{
    try{
        // retrieving shoot id for reloading page
        const shootId = await Shot.aggregate([
          {$match:
              {
                  _id: new ObjectID(req.params.id)
              }
          }
        ])
        await Shot.remove({_id:req.params.id})
        console.log('Deleted Item')
        res.redirect("/shoot/"+shootId[0].shoot)
        res.json('Deleted It')
    }catch(err){
        console.log(err)
    }
}
};