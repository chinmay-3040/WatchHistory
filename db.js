import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/mywatchlist';



const mongoDB = async () => {
    try {
      await mongoose.connect(uri);
      console.log('Connected 5');
        
    } catch (error) {
      console.log('err: ', error);
    }
  };


export default mongoDB;