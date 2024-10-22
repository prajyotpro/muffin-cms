const { Sequelize } = require('sequelize');

export class Database {
    private static instance: Database;

    client: any;

    constructor() {
        let databaseName = process.env.CLIENT_DATABASE_NAME ? process.env.CLIENT_DATABASE_NAME : ""
        let userName = process.env.CLIENT_DATABASE_USERNAME ? process.env.CLIENT_DATABASE_USERNAME : ""
        let password = process.env.CLIENT_DATABASE_PASSWORD ? process.env.CLIENT_DATABASE_PASSWORD : ""
        let host = process.env.CLIENT_DATABASE_HOSTNAME ? process.env.CLIENT_DATABASE_HOSTNAME : ""
        this.client = new Sequelize(databaseName, userName, password, {
            host: host,
            dialect: 'mysql'
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}