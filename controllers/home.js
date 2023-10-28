const Shoot = require('../models/Shoot')
const Item = require('../models/Item')
const Shot = require('../models/Shot');
const { ObjectId } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getHome: async (req,res)=>{
        try{
          function getDayOfCurrentWeek(offset) {
            const today = new Date();
            const dayOfWeek = today.getDate() - today.getDay() + offset;
            const targetDate = new Date(today.setDate(dayOfWeek));
            targetDate.setHours(-4, 0, 0, 0);
            return targetDate;
          }
        
          function getSundayOfCurrentWeek() {
            return getDayOfCurrentWeek(0);
          }
        
          function getNextSunday() {
            return getDayOfCurrentWeek(7);
          }
        

          const thisWeeksShoots =  await Shoot 
          .aggregate(
            [
              { $match : { $and: [ { userId:req.user.id }, { startDate: { $gte: getSundayOfCurrentWeek(), $lt: getNextSunday() } } ] } },
              { $lookup: {
                from: 'shots',
                localField: '_id',
                foreignField: 'shoot',
                as: 'shotList'
              } },
              { $addFields: {shotCount: {$size: "$shotList"}}}
            ]
          )
          .sort( { startDate: 1 } )

          let shots = await Shot.find({ userId:req.user.id })
                                  .populate({
                                    path: 'shoot',
                                    match: { startDate: { $gte: getSundayOfCurrentWeek(), $lt: getNextSunday() } }
                                  })
          shots = await shots.filter(e => e.shoot !== null)
          const numShots = await shots.length
          const numItems = await shots.filter((e, i, arr) => arr.findIndex(v => v.item.toString() === e.item.toString()) === i).length
          res.json({shoots: thisWeeksShoots, numShots: numShots, shots, numItems})
        }catch(err){
            console.log(err)
        }
    },
    getIndex: (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    }
    
}