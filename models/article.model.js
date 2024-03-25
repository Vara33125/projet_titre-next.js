import mongoose from 'mongoose';

delete mongoose.models['articles'];

const { Schema } = mongoose

const articleSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  content: { type: String, required: true },
  stock: { type: Number, required: true },
  online: { type: Boolean, required: true },
  avis: [{ type: mongoose.Schema.Types.ObjectId, ref: "Avis" }],
  picture: [
    {
      img: { type: String, required: true },
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
    },
  ],
});


export default mongoose.model('articles', articleSchema);
