const Shoot = require('../models/Shoot')
const Item = require('../models/Item')
const Shot = require('../models/Shot')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    getShoots: async (req,res)=>{
        console.log(req.user)
        try{
            const shoots =  await Shoot.find({userId:req.user.id}).sort({ startDate: 1 } )
            const numShoots = await Shoot.find({userId:req.user.id})
            const shootsLeft = await Shoot.countDocuments({userId:req.user.id,completed: false})
            res.render('shoots.ejs', {shoots: shoots, left: shootsLeft, title: 'Shoots', user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getShootDetails: async (req,res)=>{
        console.log(req.user)
        try {
            const shoot = await Shoot.findById(req.params.id);
            // const shots = await Shot.find({shoot: req.params.id}).lean();
            // const shotsData = await Shot.aggregate([
            //     {$match:
            //         {
            //             shoot: new ObjectID(req.params.id)
            //         }
            //     },
            //     {$lookup: 
            //         {
            //             from: "items",
            //             localField: "item",
            //             foreignField: "_id",
            //             as: "item_info"
            //         }
            //     }
            // ])
            const shotsData = await Shot.find({ shoot: req.params.id }).populate('item')
            const items =  await Item.find({userId:req.user.id}).sort({ launchDate: 1 } )
            res.render("shootDetails.ejs", { shoot: shoot, title: 'Shoot Details', user: req.user, items: items, shotsData: shotsData });
            console.log(shotsData)
            console.log(req.params.id)
          } catch (err) {
            console.log(err);
          }
    },
    createShoot: async (req, res)=>{
        try{
            await Shoot.create({
                shootName: req.body.shootName,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                contentType: req.body.contentType,
                userId: req.user.id,
            })
            console.log('Shoot has been added!')
            res.redirect('/shoot')
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
            backURL = req.header('Referer') || '/'
            await Shoot.deleteOne({_id:req.params.id})
            console.log('Deleted Shoot')
            res.redirect(backURL)
        }catch(err){
            console.log(err)
        }
    }
}