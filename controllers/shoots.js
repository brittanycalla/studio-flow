const Shoot = require('../models/Shoot')
const Item = require('../models/Item')
const Shot = require('../models/Shot')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getShoots: async (req,res)=>{
        try{
            const shoots =  await Shoot
            .aggregate(
                [
                  { $match : { userId:req.user.id } },
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
            const numShoots = await Shoot.find({userId:req.user.id})
            const shootsLeft = await Shoot.countDocuments({userId:req.user.id,completed: false})
            res.json({shoots: shoots, left: shootsLeft})
        }catch(err){
            console.log(err)
        }
    },
    getShootDetails: async (req,res)=>{
        try {
            let shootDetails =  await Shoot 
            .aggregate(
              [
                { $match : { _id: ObjectID(req.params.id) } },
                { $lookup: {
                  from: 'shots',
                  let: { shootId: '$_id' },
                  pipeline: [
                    { $match: { $expr: { $eq: [ '$shoot', '$$shootId' ] } } },
                    { $lookup: {
                      from: 'items',
                      let: { itemId: '$item' },
                      pipeline: [
                        { $match: { $expr: { $eq: [ '$_id', '$$itemId' ] } } },
                      ],
                      as: 'item'
                    } },
                    { "$unwind": "$item" }
                  ],
                  as: 'shotList'
                } },
                { $addFields: {shotCount: {$size: "$shotList"}}}
              ]
            )

            const items =  await Item.find({userId:req.user.id}).sort({ launchDate: 1 } )
            res.json({ shootDetails, items })
          } catch (err) {
            console.log(err);
          }
    },
    createShoot: async (req, res)=>{
        try{
            const shoot = await Shoot.create({
                shootName: req.body.shootName,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                contentType: req.body.contentType,
                userId: req.user.id,
                shotList: []
            })
            res.json({ shoot })
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Shoot.findOneAndUpdate({_id:req.body.shootIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Shoot.findOneAndUpdate({_id:req.body.shootIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteShoot: async (req, res)=>{
        console.log(req.params.id)
        try{
          const shoot = await Shoot.findOneAndDelete({_id:req.params.id})

          // delete the corresponding shots
          if (shoot) {
            await Shot.deleteMany({ shoot: req.params.id });
            console.log('Deleted Shoot and its corresponding Shots');
            res.json({ shoot });
          } else {
            console.log('Shoot not found');
            res.status(404).json({ message: 'Shoot not found' });
          }
        }catch(err){
          console.log(err)
        }
    }
}