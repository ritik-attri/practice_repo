const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = Schema({
    created_by:{
        type:String,
        required:true
    },
    collaboration:[{
        user_id:{
            type:String,
        },
        status:{
            type:Boolean,
            default:false
        },
    }],
    status:{
        type:Boolean,
        default:false
    },
    project_title:{
        type:String
    },
    subject:{
        type:String
    },
    grade:{
        type:String
    },
    learning_outcome:{
        type:String
    },
    key_contribution:{
        type:String
    },
    details_activity:{
        type:String
    },
    assigned_to:{
        type:String
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    project_summary:{
        type:String
    },
    project_score:Number,
    project_submitted_by:Date,
    attached_files:[{
        userid:{
            type:String,
        },
        file:{
            type:String,
        }
    }],
    comments:[{
        message:{
            type:String,
        },
        userid:{
            type:String,
        }
    }],
    price:{
        type:String,
    }

});



module.exports = mongoose.model('Project', projectSchema);
