import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_CNN);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
    
	} catch (error) {
    throw new Error('Error: Attempting to establish a connection with the database');
	}
};

export default connectDB;
