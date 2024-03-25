import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true , unique : true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  location : {
    adress : {type: String, required : true},
    city : { type : String , required : true},
    cp : {type : Number , required : true},
  },
});

userSchema.plugin(mongooseUniqueValidator);
export default mongoose.model("users", userSchema);
