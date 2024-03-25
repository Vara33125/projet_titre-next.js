
import mongoose from "mongoose";

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'boutique',
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("Mongo connected ! 👍🏾");
  }catch(e){
    throw new Error('Error in connecting')
  }
}

export default connect;
