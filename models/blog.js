const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = Schema({
    createdby:{
        type:String,
    },
    title:{
        type:String,
    },
    body:{
        type:String
    },
    comments:[{
        comment_by:{
            type:String,
        },
        main_comment:{type:String},
        secondary_comments:[{type:String}],
        
    }],
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    }
})
module.exports = mongoose.model('blog', blogSchema);