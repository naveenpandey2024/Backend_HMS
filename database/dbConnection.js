import mongoose from "mongoose";


const uri = 'mongodb+srv://pandeynaveencsjmu2020:2C8WrsyU0qg0d03k@cluster0.bwnsaw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const dbConnection = () => {
  mongoose.connect(uri, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};
