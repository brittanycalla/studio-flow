const Shoot = require('../models/Shoot')
const Item = require('../models/Item')
const Shot = require('../models/Shot')

module.exports = {
    getIndex: async (req,res)=>{
        try{
            const shoots =  await Shoot.find({userId:req.user.id}).sort({ startDate: 1 } )
            const numShoots = shoots.length
            const items =  await Item.find({userId:req.user.id}).sort({ launchDate: 1 } )
            const numItems = await items.length
            const shootsLeft = await Shoot.countDocuments({userId:req.user.id,completed: false})
            res.render('index.ejs', {title: 'Home', user: req.user, shoots: shoots, numShoots: numShoots, numItems: numItems})
        }catch(err){
            console.log(err)
        }
    }
}