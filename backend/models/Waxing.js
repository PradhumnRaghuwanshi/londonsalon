const mongoose = require("mongoose")

const WaxingSchema = mongoose.Schema({
    title:String,
    category:String,
    price:Number,
    description:Array,
    thingsToKnow:Array,
    features:Array
})

module.exports = mongoose.model("Waxing", WaxingSchema);