import mongoose from "mongoose";


const avisSchema = mongoose.Schema(
    {
        rating : {type : Number , required : true},
        content : {type : String , required : false},
        user : {type : mongoose.Schema.Types.ObjectId, ref : 'User' , required: true},
        product: {type : mongoose.Schema.Types.ObjectId, ref : 'Product', required:true},

})

export default mongoose.model('Avis' , avisSchema)




