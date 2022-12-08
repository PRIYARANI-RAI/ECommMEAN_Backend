const mongoose = require('mongoose');

//Schema
const productSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    richDescription:{
        type:String,
        default:'',
        required:false
    },
    image: {
        type:String,
        default:'',
        required:false
    },
    images:[{
        type:String,
    }],
    brand: {
        type:String,
        default:'',
        required:false
    },
    price: {
        type:Number,
        default:0,
        required:false
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'meancategory',
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
        min:0,
        max:255
    },
    rating: {
        type: Number,
        default:0
    },
    numReviews: {
        type: Number,
        default:0
    },
    isFeatured:{
        type:Boolean,
        default:false
    },
    dateCreated: {
        type:Date,
        default:Date.now
    }
});
productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('meanproducts', productSchema);