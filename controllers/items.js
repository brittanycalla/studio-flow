const Item = require('../models/Item')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            const items =  await Item.find({userId:req.user.id}).sort({ launchDate: 1 } )
            const numItems = await items.length
            const itemsLeft = await Item.countDocuments({userId:req.user.id,completed: false})
            res.render('items.ejs', {items: items, left: itemsLeft, title: 'Items', user: req.user})
            console.log(items)
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Item.create({
                styleNumber: req.body.styleNumber,
                color: req.body.color,
                styleName: req.body.styleName,
                category: req.body.category,
                launchDate: req.body.launchDate,
                userId: req.user.id,
                sku: req.body.sku || `${req.body.styleNumber}-${req.body.color.toUpperCase()}`
            })
            console.log('Item has been added!')
            res.redirect('/items')
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
        console.log(req.params.id)
        try{
            await Item.remove({_id:req.params.id})
            console.log('Deleted Item')
        }catch(err){
            console.log(err)
        }
    }
}