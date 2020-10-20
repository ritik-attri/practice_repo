const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PorNPORGSchema = Schema({
    org_name:{
        type:String,
        unique:true,
        default:'',
    },
    verification_status:{
        type:Boolean,
        default:false
    },
    phone_Number:{
        type:Number,
    },
    country:{
        type:String,
    },
    Educators:[{
        type:String,
    }],
    groups_in:{
        type:Array,
        default:[]
    },
    classes:[{
        type:String,
    }]
});



module.exports = mongoose.model('PorNPORG', PorNPORGSchema);
