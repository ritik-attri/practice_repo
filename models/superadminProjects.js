const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const superadminProjectSchema = Schema({
    title:{
        type:String,
        
    },
    summary:{
        type:String,
        
    },
    subject:{
        type:String,
       
    },
    grade:{
        type:String,
        
    },
    keywords:{
        type:String,
       
    },
    inquiryQuestions:{
        type:String,
        
    },
    learningOutcome:{
        type:String,
    }, 
    keyContributions:{
        type:String,
    },
    projectCover:{
        type:String
    }

})
module.exports = mongoose.model('superadminProject', superadminProjectSchema);
