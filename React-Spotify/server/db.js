import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://brunogama:brunogama24!@cluster0.lomb0.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}