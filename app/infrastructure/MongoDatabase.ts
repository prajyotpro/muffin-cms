import mongoose from 'mongoose';

export class MongoDatabase {
    private static instance: MongoDatabase;

    client: any;

    constructor() {
        let connectionURL = process.env.MONGODB_URL ? process.env.MONGODB_URL : "";
        mongoose.connect(connectionURL);
        this.client = mongoose;
    }

    public static getInstance(): MongoDatabase {
        if (!MongoDatabase.instance) {
            MongoDatabase.instance = new MongoDatabase();
        }

        return MongoDatabase.instance;
    }
}