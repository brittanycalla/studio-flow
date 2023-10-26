const Item = require('../models/Item')

module.exports = {
    getItems: async (req,res)=>{
        try{
            const items =  await Item.find({userId:req.user.id}).sort({ launchDate: 1 } )
            const numItems = await items.length
            const itemsLeft = await Item.countDocuments({userId:req.user.id,completed: false})
            res.json({items: items, numItems: numItems, itemsLeft: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            const item = await Item.create({
                styleNumber: req.body.styleNumber,
                color: req.body.color,
                styleName: req.body.styleName,
                category: req.body.category,
                launchDate: req.body.launchDate,
                userId: req.user.id,
                sku: req.body.sku || `${req.body.styleNumber}-${req.body.color.includes(' ') ? req.body.color.toUpperCase().split(' ').join('') : req.body.color.toUpperCase()}`
            })
            res.json({ item })
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Item.findOneAndUpdate({_id:req.body.itemIdFromJSFile},{
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
    //         await Item.findOneAndUpdate({_id:req.body.itemIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteItem: async (req, res)=>{
        try{
            const item = await Item.findOneAndDelete({_id:req.params.id})
            res.json({ item })
        }catch(err){
            console.log(err)
        }
    }
}