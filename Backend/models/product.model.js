import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
    },
    image: {
        type: String,
        required: [true, "Please add an image"],
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product;