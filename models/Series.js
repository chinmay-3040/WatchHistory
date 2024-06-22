import mongoose from "mongoose";

const SeriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    seasons:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
});

const Series = mongoose.model('Series', SeriesSchema);


export default Series;

// So, in summary, the line module.exports = mongoose.model('User', UserSchema); exports a Mongoose model 
// named 'User' with the specified schema UserSchema, making it accessible for use in other parts of your Node.js 
// application. Other files can import this model using require() and then interact with the MongoDB collection 
// associated with the 'User' model.
