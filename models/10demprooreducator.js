const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const educatoror10demproSchema = Schema({
    verification_status:{
        type:Boolean,
        default:false
    },
    org_name:{
        type:String,
        default:'',
    },
    phone_number:{
        type:Number,
    },
    country:{
        type:String,
    },
    classes:[{
        type:String,
    }],
    groups_in:{
        type:Array,
        default:[]
    },
});



module.exports = mongoose.model('10demprooreducator', educatoror10demproSchema);
