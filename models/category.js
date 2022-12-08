const mongoose = require('mongoose');

//Schema
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:false
    },
    color:{
        type:String,
        required:false
    }
});
categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});

exports.Category = mongoose.model('meancategory', categorySchema);