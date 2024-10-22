import { Model, model } from "mongoose";
import { MongoDatabase } from "../infrastructure/MongoDatabase";

const database = MongoDatabase.getInstance().client;

const subscriberSchema = new database.Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		organizationId: String
	}
);

export interface ISubscriber {
	firstName: String,
	lastName: String,
	email: String,
	organizationId: String
}

export type ISubscriberModel = Model<ISubscriber>;

export const Subscriber = model<ISubscriber, ISubscriberModel>(
	"subscribers",
	subscriberSchema
)
