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

          const shotsData = await Shot.find({ shoot: req.params.id })

          let thisWeeksShoots =  await Shoot.find( { 
            userId:req.user.id,
            startDate:{ $gte: getSundayOfCurrentWeek(), $lt: getSaturdayOfCurrentWeek() }
          } )
          .sort({ startDate: 1 } )
          const numShoots = thisWeeksShoots.length
          // change to only find shoots that match dates, then remove from populate
          let shots = await Shot.find({ userId:req.user.id })
                                  .populate({
                                    path: 'shoot',
                                    match: { startDate: { $gte: getSundayOfCurrentWeek(), $lt: getSaturdayOfCurrentWeek() } }
                                  })
          shots = shots.filter(e => e.shoot !== null)

          const numShots = await shots.length
          const numItems = await shots.filter((e, i, arr) => arr.findIndex(v => v.item.toString() === e.item.toString()) === i).length
          res.render('home.ejs', {title: 'Home', user: req.user, shoots: thisWeeksShoots, numShoots: numShoots, numItems: numItems, numShots: numShots})
          console.log(shots)
          // shots.filter(shot => shot.shoot._id.toString() == ObjectId('639bf8f9396c621b7f662573')).length
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