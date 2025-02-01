import mongoose from 'mongoose';

const connectDB = (url) =>{
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log("Mongo db connected successfully"))
    .catch((err) => console.log(err))

}

export default connectDB;

//password: CylYoMXVDP5EEgKF
//url:mongodb+srv://ashishmohapatraofficial:CylYoMXVDP5EEgKF@cluster0.p9zyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0