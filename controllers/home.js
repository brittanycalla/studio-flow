const Shoot = require('../models/Shoot')
const Item = require('../models/Item')
const Shot = require('../models/Shot');
const { ObjectId } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getHome: async (req,res)=>{
        try{
          function getSundayOfCurrentWeek() {
            const today = new Date()
            const first = today.getDate() - today.getDay()
            const sunday = new Date(today.setDate(first))
            sunday.setHours(-4, 0, 0, 0)
            return sunday
          } 

          function getSaturdayOfCurrentWeek() {
              const today = new Date()
              const first = today.getDate() - today.getDay() + 1
              const last = first + 5
              const saturday = new Date(today.setDate(last))
              saturday.setHours(-4, 0, 0, 0)
              return saturday
          }

          const thisWeeksShoots =  await Shoot 
          .aggregate(
            [
              { $match : { $and: [ { userId:req.user.id }, { startDate: { $gte: getSundayOfCurrentWeek(), $lt: getSaturdayOfCurrentWeek() } } ] } },
              { $lookup: {
                from: 'shots',
                localField: '_id',
                foreignField: 'shoot',
                as: 'shot_list'
              } }
            ]
          )
          .sort( { startDate: 1 } )

          const numShoots = thisWeeksShoots.length

          let shots = await Shot.find({ userId:req.user.id })
                                  .populate({
                                    path: 'shoot',
                                    match: { startDate: { $gte: getSundayOfCurrentWeek(), $lt: getSaturdayOfCurrentWeek() } }
                                  })
          shots = shots.filter(e => e.shoot !== null)
          const numShots = await shots.length
          const numItems = await shots.filter((e, i, arr) => arr.findIndex(v => v.item.toString() === e.item.toString()) === i).length
          res.render('home.ejs', {title: 'Home', user: req.user, shoots: thisWeeksShoots, numShoots: numShoots, numItems: numItems, numShots: numShots})
        }catch(err){
            console.log(err)
        }
    },
    getIndex: (req, res) => {
      res.render('index.ejs', {
        title: 'Studio Flow'
      })
    }
    
}